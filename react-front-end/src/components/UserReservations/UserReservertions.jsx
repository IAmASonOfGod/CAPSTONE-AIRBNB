import React, {useState} from "react";
import { UserReservationWrapper } from "./UserReservations.styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as DropDown } from "./DropDown.svg";
import ListingFooter2 from "../ListingPage/AirbnbFooter/ListingFooter/ListingFooter2";
import { useReservationContext } from "../../Context/ReservationContext";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginContext.tsx";
import { useDropDownContext } from "../../Context/DropDownContext";
import { useProfileSection } from "../../Context/ProfileSectionContext";

const UserReservations = () => {
  const { userReservations, deleteReservation } = useReservationContext();

    const { loggedInUser, logoutUser } = useLoginContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { handleRoleSelection } = useProfileSection();
    const {
      isProfileDropdownOpen,
      toggleProfileDropdown,
    } = useDropDownContext();
  
    const navigate = useNavigate();
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLogout = () => {
      logoutUser();
      setIsDropdownOpen(false);
      navigate("/");
    };

  return (
    <UserReservationWrapper>
       <div className="header">
             <div className="logo" onClick={() => navigate("/")}>
               <Logo />
             </div>
             {loggedInUser ? (
               <div className="profile-section">
                 <div className="welcome-message">
                   <p>Welcome, {loggedInUser.username}</p>
                 </div>
                 <div className="profile-dropdown" onClick={toggleProfileDropdown}>
                   <DropDown />
                   {isProfileDropdownOpen && (
                     <div className="logout-dropdown" onClick={handleLogout}>
                       <p>Logout</p>
                     </div>
                   )}
                 </div>
               </div>
             ) : (
               <div className="profile-section">
                 <div className="welcome-message">
                   <p>Welcome, User</p>
                 </div>
                 <div className="profile-dropdown" onClick={toggleProfileDropdown}>
                   <DropDown />
                   {isProfileDropdownOpen && (
                     <div
                       className="dropdown"
                       onClick={() => handleRoleSelection("user")}
                     >
                       <p>User Login</p>
                     </div>
                   )}
                 </div>
               </div>
             )}
           </div>
      <div className="filters">
        <div className="view-reservation" onClick={()=>{navigate("/UserListing");}}>
          <button>View Accommodations</button>
        </div>
      </div>
      <div className="my-reservations">
        <div className="reservation-title">
          <p>My Reservations</p>
        </div>
        <div className="table-container">
          <table className="reservation-table">
            <thead className="table-header">
              <tr>
                <th>Booked By</th>
                <th>Property Name</th>
                <th>Check-In Date</th>
                <th>Check-Out Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userReservations && userReservations.length > 0 ? (
                userReservations.map((reservation) => (
                  <tr key={reservation._id}>
                    <td>{reservation.userId.username}</td>
                    <td>{reservation.listingId.title}</td>
                    <td>
                      {new Date(reservation.checkInDate).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(reservation.checkOutDate).toLocaleDateString()}
                    </td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={()=>{deleteReservation(reservation._id)}}
                      >
                        {" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No reservations found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ListingFooter2 />
    </UserReservationWrapper>
  );
};

export default UserReservations;
