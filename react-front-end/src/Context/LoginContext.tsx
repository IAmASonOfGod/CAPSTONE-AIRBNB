import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProfileSection } from "./ProfileSectionContext";
import { useViewListingContext } from "./ViewListingContext.tsx";

const LoginCreateContext = createContext({});

const LoginContextProvider = ({ children }) => {
  const { fetchListings } = useViewListingContext();

  interface User {
    username: string;
    password: string;
    role: string;
  }
  const navigate = useNavigate();
  const { role } = useProfileSection();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [token, setAccessToken] = useState<string | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const getLoginPayload = () => {
    return { ...credentials, role };
  };

  const clearLoginForm = () => {
    setCredentials({
      username: "",
      password: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "https://capstone-airbnb-backend.onrender.com/user/login",
        getLoginPayload()
      );

      const { token, refreshToken, user } = response.data;

      setAccessToken(token);
      setLoggedInUser(user);

      console.log("Access Token:", token);
      console.log("Refresh Token:", refreshToken);
      console.log("Logged In User:", user);

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      console.log("Login successful:", response.data);

      clearLoginForm();

      if (user.role === "user") {
        navigate("/UserListing");
      } else {
        navigate("/HostListing");
        fetchListings();
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setError(error.response?.data || "Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      alert(`${loggedInUser.username} is currently logged in`);
    }
  }, [loggedInUser]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedToken && storedRefreshToken && storedUser) {
      setAccessToken(storedToken);
      setLoggedInUser(JSON.parse(storedUser));
      console.log("logged in user in LoginContext :", storedUser);
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("loggedInUser");

    setAccessToken(null);
    setLoggedInUser(null);

    navigate("/");

    console.log("User logged out successfully");
  };

  return (
    <LoginCreateContext.Provider
      value={{
        ...credentials,
        handleInputChange,
        handleLogin,
        logoutUser,
        error,
        token,
        loggedInUser,
      }}
    >
      {children}
    </LoginCreateContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginCreateContext);

export default LoginContextProvider;
