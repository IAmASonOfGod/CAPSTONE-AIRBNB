import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-airbnb-backend.onrender.com",
});

// Interceptor to attach the access token to each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(`[REQUEST] Access token attached: ${token}`);
    } else {
      console.warn("[REQUEST] No access token found for the request.");
    }
    console.log(`[REQUEST] Config:`, config);
    return config;
  },
  (error) => {
    console.error("[REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

// Interceptor to handle token refresh when access token expires
api.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] Success for ${response.config.url}:`, response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    console.error(
      `[RESPONSE ERROR] Status: ${error.response?.status || "N/A"} for ${
        originalRequest.url
      }`
    );
    console.error("[ERROR DETAILS]", error.message);

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.warn(
        "[TOKEN REFRESH] Access token expired. Attempting to refresh..."
      );
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        console.log(
          "[TOKEN REFRESH] Refresh token found. Sending request to refresh endpoint..."
        );
        try {
          const response = await axios.post(
            "http://localhost:5000/api/user/refresh_token",
            { refreshToken }
          );

          console.log("[TOKEN REFRESH] Response:", response.data);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          // Retry the original request with the new token
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          console.log("[TOKEN REFRESH] Retrying original request...");
          return api(originalRequest);
        } catch (refreshError) {
          console.error("[TOKEN REFRESH ERROR]", refreshError);
          // Redirect to login or handle logout if needed
        }
      } else {
        console.error(
          "[TOKEN REFRESH] No refresh token available. Redirecting to login..."
        );
      }
    }

    return Promise.reject(error);
  }
);

export default api;
