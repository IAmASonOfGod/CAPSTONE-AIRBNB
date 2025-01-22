import React, { useState } from "react";
import { HostListingWrapper } from "./HostListing.styled";
import HostListHeader from "./HostListHeader/HostListHeader";
import { ReactComponent as Heart } from "./Heart.svg";
import { ReactComponent as Star } from "./Star.svg";
import { useNavigate } from "react-router-dom";
import { useViewListingContext } from "../../Context/ViewListingContext.tsx";
import { useListingUpdate } from "../../Context/ListingUpdateContext.tsx";
import { useDeleteListingContext } from "../../Context/DeleteListingContext.jsx";
import { useReservationContext } from "../../Context/ReservationContext.jsx";

const HostListing = () => {
  const navigate = useNavigate();
  const { fetchAllReservations } = useReservationContext();
  const { listings, fetchListings } = useViewListingContext();
  const { setListingId, ListingId } = useListingUpdate();
  const { deleteListing } = useDeleteListingContext();

  console.log("listings :", listings)

  const handleNavigate = () => {
   fetchAllReservations()
    navigate("/HostReservations");
  };

  return (
    <HostListingWrapper>
      <div className="host-listing-header">
        <HostListHeader />
        <div className="filters">
          <div
            className="view-reservation"
            onClick={() => {
              handleNavigate();
            }}
          >
            <button>View Reservations</button>
          </div>
          <div
            className="view-listing"
            onClick={() => navigate("/HostListing")}
          >
            <button>View Listings</button>
          </div>
          <div
            className="create-listing"
            onClick={() => navigate("/CreateListing")}
          >
            <button>Create Listing</button>
          </div>
        </div>
      </div>
      <div className="left">
        <div className="listing-header">
          <p>My Listings</p>
        </div>
        <div className="listing-cards-container">
          {listings && listings.length > 0 ? (
            listings.map((listing) => (
              <div key={listing._id} className="listing-card">
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
                <div className="update-button-wrapper">
                  <div
                    className="update-button"
                    onClick={() => {
                      setListingId(listing._id);

                      navigate("/UpdateListing");
                      fetchListings();
                    }}
                  >
                    <p>Update</p>
                  </div>
                </div>
                <div
                  className="delete-button-wrapper"
                  onClick={() => {
                    deleteListing(listing._id);
                  }}
                >
                  <div className="delete-button">
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p
              className="listing-welcome-msg
            "
            >
              {listings && listings.length > 0
                ? "Listings are currently loading..."
                : "No listings available..."}
            </p>
          )}
        </div>
      </div>
    </HostListingWrapper>
  );
};

export default HostListing;
