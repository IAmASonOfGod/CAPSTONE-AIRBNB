import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { AirbnbSearchWrapper } from "./AirbnbSearch.styled";
import { ReactComponent as Search } from "./Search.svg";
import { ReactComponent as DropDownMenu } from "./DropDownMenu.svg";
import { useNavigate } from "react-router-dom";
import { useViewListingContext } from "../../../../Context/ViewListingContext.tsx";
import { useLocationProvider } from "../../../../Context/currentLocationContext.jsx";

const AirbnbSearch = () => {
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [isCheckInVisible, setCheckInVisible] = useState(false);
  const [isCheckOutVisible, setCheckOutVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [isGuestModalVisible, setGuestModalVisible] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const navigate = useNavigate();
  const { fetchUserListings } = useViewListingContext();
  const { setCurrentLocation } = useLocationProvider();

  const locations = [
    "All locations",
    "Cape Town",
    "Venezuela",
    "Durban",
    "Manhattan",
  ];

  const locationFilterToggle = () => {
    setLocationVisibility((prev) => !prev);
  };

  const handleLocationSelect = (location) => {
    setLocationVisibility(false);
    fetchUserListings();
    setCurrentLocation(location);
    navigate("/UserListing");
  };

  const toggleGuestModal = () => {
    setGuestModalVisible(!isGuestModalVisible);
  };

  const increaseGuestCount = (type) => {
    if (type === "adult") {
      setAdultCount(adultCount + 1);
    } else if (type === "children") {
      setChildrenCount(childrenCount + 1);
    }
  };

  const decreaseGuestCount = (type) => {
    if (type === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (type === "children" && childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  return (
    <AirbnbSearchWrapper>
      {/* Location Dropdown */}
      <div className="nav-item loca-container" onClick={locationFilterToggle}>
        <div className="nav-item-title">
          <p>Location</p>
        </div>
        <div className="nav-item-subtitle">
          <p>Select Location</p>
        </div>
        {locationVisibility && (
          <ul className="location-options">
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="location-option"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Check-in Calendar */}
      <div className="nav-item" onClick={() => setCheckInVisible(true)}>
        <div className="nav-item-title">
          <p>Check in</p>
        </div>
        <div className="nav-item-subtitle">
          <p>
            {checkInDate.toDateString()}
          </p>
        </div>
      </div>
      {isCheckInVisible && (
        <>
          <div
            className="calendar-overlay"
            onClick={() => setCheckInVisible(false)}
          ></div>
          <div
            className="calendar-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar
              date={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                setCheckInVisible(false);
              }}
              className="rdrCalendarWrapper"
            />
          </div>
        </>
      )}

      {/* Check-out Calendar */}
      <div className="nav-item" onClick={() => setCheckOutVisible(true)}>
        <div className="nav-item-title">
          <p>Check out</p>
        </div>
        <div className="nav-item-subtitle">
          <p>{checkOutDate.toDateString()}</p>
        </div>
      </div>
      {isCheckOutVisible && (
        <>
          <div
            className="calendar-overlay"
            onClick={() => setCheckOutVisible(false)}
          ></div>
          <div
            className="calendar-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar
              date={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setCheckOutVisible(false);
              }}
              className="rdrCalendarWrapper"
            />
          </div>
        </>
      )}

      {/* Guests Section */}
      <div className="nav-item" onClick={toggleGuestModal}>
        <div className="nav-item-title">
          <p>Guests</p>
        </div>
        <div className="nav-item-subtitle">
          <p>
            {isGuestModalVisible
              ? `${adultCount} adults, ${childrenCount} children`
              : `${adultCount + childrenCount} guests`}
          </p>
        </div>
      </div>

      {/* Guest Modal */}
      {isGuestModalVisible && (
        <div className="guest-modal-overlay" onClick={toggleGuestModal}>
          <div className="guest-modal" onClick={(e) => e.stopPropagation()}>
            <div className="guest-row">
              <p>Adults</p>
              <div className="guest-count">
                <button
                  className="guests-btn"
                  onClick={() => decreaseGuestCount("adult")}
                >
                  -
                </button>
                <p>{adultCount}</p>
                <button
                  className="guests-btn"
                  onClick={() => increaseGuestCount("adult")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="guest-row">
              <p>Children</p>
              <div className="guest-count">
                <button
                  className="guests-btn"
                  onClick={() => decreaseGuestCount("children")}
                >
                  -
                </button>
                <p>{childrenCount}</p>
                <button
                  className="guests-btn"
                  onClick={() => increaseGuestCount("children")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="search-button">
        <div className="button-icon">
          <Search />
        </div>
      </div>
    </AirbnbSearchWrapper>
  );
};

export default AirbnbSearch;
