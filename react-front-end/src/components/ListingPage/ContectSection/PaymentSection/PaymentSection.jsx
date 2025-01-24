import React, { useState, useRef, useEffect } from "react";
import { PaymentSectionWrapper } from "./PaymentSection.styled";
import { Calendar } from "react-date-range";
import { ReactComponent as Star } from "./Star.svg";
import { ReactComponent as Chevron } from "./Chevron-down.svg";
import { ReactComponent as Flag } from "./Flag.svg";
import { useViewListingContext } from "../../../../Context/ViewListingContext.tsx";
import { useReservationContext } from "../../../../Context/ReservationContext.jsx";

const PaymentSection = () => {
  const { currentListing } = useViewListingContext();
  const [isCheckInVisible, setCheckInVisible] = useState(false);
  const [isCheckOutVisible, setCheckOutVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [isGuestModalVisible, setGuestModalVisible] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const { createReservation, updateReservation, User } = useReservationContext();
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const cleaningFee = 62;
  const serviceFee = 83;
  const occupancyTaxes = 27;
  const discount = 0;

  const getNumberOfDays = () => {
    const timeDifference = checkOutDate - checkInDate;
    return timeDifference > 0
      ? Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
      : 1;
  };

  const numberOfDays = getNumberOfDays();

  const totalGuests = adultCount + childrenCount;
  const baseCost = currentListing.price * numberOfDays;
  const totalCost =
    (baseCost + cleaningFee + serviceFee + occupancyTaxes - discount) *
    totalGuests;

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
    if (type === "adult" && adultCount > 1) {
      setAdultCount(adultCount - 1);
    } else if (type === "children" && childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  useEffect(() => {
    const reservationDetails = {
      listingId: String(currentListing._id),
      checkInDate,
      checkOutDate,
      guests: totalGuests,
      totalPrice: totalCost,
      UserId: ""
    };
    updateReservation(reservationDetails);
  }, [checkInDate, checkOutDate, totalGuests]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setCheckInVisible(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setCheckOutVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PaymentSectionWrapper>
      <div className="booking-box">
        <div className="booking-box-header">
          <div className="header-price">
            <div className="price">
              <p>${currentListing.price} </p>
            </div>
            <div className="per"></div>
            <div className="night">
              <p> / night</p>
            </div>
          </div>
          <div className="ratings-and-reviews">
            <div className="star-rating">
              <div className="star">
                <Star />
              </div>
              <div className="ratings">
                <p>{currentListing.rating}</p>
              </div>
              ·
              <div className="reviews">
                <p>{currentListing.reviews} reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="detail-dates">
            <div
              className="check-in-dates"
              ref={checkInRef}
              onClick={() => setCheckInVisible(true)}
            >
              <div className="check-in-header">
                <p>CHECK-IN</p>
              </div>
              <div className="check-in-date">
                <p>{checkInDate.toDateString()}</p>
              </div>
              {isCheckInVisible && (
                <div className="calendar-wrapper">
                  <Calendar
                    date={checkInDate}
                    onChange={(date) => {
                      setCheckInDate(date);
                      setCheckInVisible(false);
                    }}
                    className="rdrCalendarWrapper"
                  />
                </div>
              )}
            </div>
            <div
              className="check-out-dates"
              ref={checkOutRef}
              onClick={() => setCheckOutVisible(true)}
            >
              <div className="check-out-header">
                <p>CHECKOUT</p>
              </div>
              <div className="check-out-date">
                <p>{checkOutDate.toDateString()}</p>
              </div>
              {isCheckOutVisible && (
                <div className="calendar-wrapper">
                  <Calendar
                    date={checkOutDate}
                    onChange={(date) => {
                      setCheckOutDate(date);
                      setCheckOutVisible(false);
                    }}
                    className="rdrCalendarWrapper"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="detail-guest" onClick={toggleGuestModal}>
            <div className="detail-guest-left">
              <div className="guests-title">
                <p>GUESTS</p>
              </div>
              <div className="guests-subtitle">
                <p>
                  {isGuestModalVisible
                    ? `${adultCount} adults, ${childrenCount} children`
                    : `${adultCount + childrenCount} guests`}
                </p>
              </div>
            </div>
            <div className="detail-guest-right">
              <Chevron />
            </div>
            {isGuestModalVisible && (
              <div className="guest-modal-overlay" onClick={toggleGuestModal}>
                <div
                  className="guest-modal"
                  onClick={(e) => e.stopPropagation()}
                >
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
          </div>
        </div>
        <div
          className="reserve-button"
          onClick={()=>{createReservation({checkInDate, checkOutDate});}}
        >
          <button className="reserve-btn">
            <div className="reserve-text">
              <p>Reserve</p>
            </div>
          </button>
        </div>
        <div className="alert">
          <p>You won’t be charged yet</p>
        </div>
        <div className="price-details">
          <div className="price-details-row">
            <div className="price-row-title">
              <p>
                ${currentListing.price} x {numberOfDays} nights
              </p>
            </div>
            <div className="row-price">
              <p>${baseCost * totalGuests}</p>
            </div>
          </div>
          <div className="price-details-row">
            <div className="price-row-title">
              <p>Weekly discount</p>
            </div>
            <div className="row-price">
              <p>${discount}</p>
            </div>
          </div>
          <div className="price-details-row">
            <div className="price-row-title">
              <p>Cleaning fee</p>
            </div>
            <div className="row-price">
              <p>${cleaningFee}</p>
            </div>
          </div>
          <div className="price-details-row">
            <div className="price-row-title">
              <p>Service fee</p>
            </div>
            <div className="row-price">
              <p>${serviceFee}</p>
            </div>
          </div>
          <div className="price-details-row">
            <div className="price-row-title">
              <p>Occupancy taxes and fees</p>
            </div>
            <div className="row-price">
              <p>${occupancyTaxes}</p>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="price-details-row">
          <div className="price-row-title">
            <p>Total</p>
          </div>
          <div className="row-price">
            <p>${totalCost}</p>
          </div>
        </div>
      </div>
      <div className="report">
        <div className="flag">
          <Flag />
        </div>
        <div className="report-title">
          <p>Report this listing</p>
        </div>
      </div>
    </PaymentSectionWrapper>
  );
};

export default PaymentSection;
