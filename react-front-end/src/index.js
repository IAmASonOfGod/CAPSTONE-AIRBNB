import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProfileSectionProvider from "./Context/ProfileSectionContext";
import { BrowserRouter as Router } from "react-router-dom";
import { DropDownProvider } from "./Context/DropDownContext.jsx";
import LoginContextProvider from "./Context/LoginContext.tsx";
import { ListingProvider } from "./Context/CreateListingContext.tsx";
import { ViewListingContextProvider } from "./Context/ViewListingContext.tsx";
import { ListingUpdateProvider } from "./Context/ListingUpdateContext.tsx";
import { DeleteListingProvider } from "./Context/DeleteListingContext.jsx";
import { ImageUploadProvider } from "./Context/imageUploadContext.tsx";
import { ImageProvider } from "./Context/SaveImageContext.tsx";
import { LocationProvider } from "./Context/currentLocationContext.jsx";
import { ReservationContexProvider } from "./Context/ReservationContext.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ViewListingContextProvider>
        <ReservationContexProvider>
          <ImageProvider>
            <LocationProvider>
              <ListingProvider>
                <ImageUploadProvider>
                  <DeleteListingProvider>
                    <ProfileSectionProvider>
                      <ListingUpdateProvider>
                        <LoginContextProvider>
                          <DropDownProvider>
                            <App />
                          </DropDownProvider>
                        </LoginContextProvider>
                      </ListingUpdateProvider>
                    </ProfileSectionProvider>
                  </DeleteListingProvider>
                </ImageUploadProvider>
              </ListingProvider>
            </LocationProvider>
          </ImageProvider>
        </ReservationContexProvider>
      </ViewListingContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
