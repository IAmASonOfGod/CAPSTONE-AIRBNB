import React, { useEffect } from "react";
import { UserListingWrapper } from "./UserListing.styled";
import UserListHeader from "./UserListHeader";
import { ReactComponent as Heart } from "./Heart.svg";
import { ReactComponent as Star } from "./Star.svg";
import { useViewListingContext } from "../../Context/ViewListingContext.tsx";
import { useLocationProvider } from "../../Context/currentLocationContext.jsx";
import { useNavigate } from "react-router-dom";

const UserListing = () => {
  const { userListings, setcurrentListing } = useViewListingContext();
  const { currentLocation } = useLocationProvider();
  const navigate = useNavigate();

  const handleCurrentListing = (listing) => {
    setcurrentListing(listing);
    localStorage.setItem("currentListing", JSON.stringify(listing));
    navigate("/Listing");
    console.log("currentlisting set", JSON.stringify(listing));
  };

  const filteredListings =
    currentLocation && currentLocation !== "All locations"
      ? userListings.filter((listing) => listing.location === currentLocation)
      : userListings;

  return (
    <UserListingWrapper>
      <div className="host-listing-header">
        <UserListHeader />
      </div>
      <div className="left">
        <div className="listing-header">
          <p>
            {filteredListings.length} stays in{" "}
            {currentLocation ? currentLocation : "all locations"}
          </p>
        </div>
        <div className="listing-cards-container">
          {filteredListings && filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <div
                key={listing._id}
                className="listing-card"
                onClick={() => {
                  handleCurrentListing(listing);
                }}
              >
                <div className="listing">
                  <div className="listing-img">
                    <img
                      src={`${listing.images[0]}`}
                      alt={`${listing.title}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.jamesedition.com/listing_images/2020/10/23/15/50/44/c5ea9c06-aae0-4af0-92b3-c50abfe55bbe/je/2000xxs.jpg";
                      }}
                    />
                  </div>
                  <div className="listing-content">
                    <div className="listing-content-header">
                      <div className="listing-title-subtitle">
                        <div className="listing-content-title">
                          <p>
                            {listing.type} · {listing.location}
                          </p>
                        </div>
                        <div className="listing-content-subtitle">
                          <p>{listing.title}</p>
                        </div>
                      </div>
                      <div className="heart">
                        <Heart />
                      </div>
                    </div>
                    <hr className="divider" />
                    <div className="content-details">
                      <div className="content-details-listing">
                        <p>
                          {listing.guests} guests · {listing.type} ·{" "}
                          {listing.bedrooms} bedrooms · {listing.bathrooms}{" "}
                          bathrooms
                        </p>
                      </div>
                      <div className="content-details-amenities">
                        <p>{listing.amenities.join(" · ")}</p>
                      </div>
                    </div>
                    <hr className="divider" />
                    <div className="content-footer">
                      <div className="review">
                        <div className="star-rating">
                          <p>{listing.rating}</p>
                        </div>
                        <div className="star">
                          <Star />
                        </div>
                        <div className="review-number">
                          <p>({listing.reviews} reviews)</p>
                        </div>
                      </div>
                      <div className="price-per-night">
                        <div className="price">
                          <p>${listing.price}</p>
                        </div>
                        <div className="per-night">
                          <p>/night</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="listing-welcome-msg">
              {userListings && userListings.length > 0
                ? "Listings are currently loading..."
                : "No listings available..."}
            </p>
          )}
        </div>
      </div>
    </UserListingWrapper>
  );
};

export default UserListing;
