import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  useRef,
  useMemo,
} from "react";
import api from "../Services/api.js";
import { useNavigate } from "react-router-dom";

const ReservationContext = createContext({});

export const ReservationContexProvider = ({ children }) => {
  const [Reservation, setReservation] = useState({});
  const [userReservations, setUserReservations] = useState([]);
  const [allReservations, setAllReservations] = useState([]);
  const [User, setUser] = useState();
  const navigate = useNavigate();

  const createReservationRef = useRef(false);

  const updateReservation = (details) => {
    setReservation((prev) => ({
      ...prev,
      ...details,
    }));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    setUser(JSON.parse(storedUser));
  }, []);

  const createReservation = async ({ checkInDate, checkOutDate }) => {
    if (createReservationRef.current) return;
    createReservationRef.current = true;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
      alert("The checkout date must be later than the check-in date.");
      return;
    }

    const storedUser = localStorage.getItem("loggedInUser");
    const User = JSON.parse(storedUser);

    try {
      if (!User) {
        alert("Login before making a reservation");
        return;
      }

      const finalReservationDetails = {
        ...Reservation,
        UserId: User._id,
      };

      const response = await api.post(
        "/api/Reservations/createReservation",
        finalReservationDetails
      );

      console.log("Reservation made:", response.data.reservation);
      fetchUserReservations(User._id);
      navigate("/UserReservations");
    } catch (e) {
      console.error("Error creating reservation:", e);
    } finally {
      createReservationRef.current = false;
    }
  };

  const fetchUserReservations = async (userId) => {
    try {
      const response = await api.get(
        `/api/Reservations/FindReservation/${userId}`
      );
      console.log("User Reservations:", response.data);
      setUserReservations(response.data);
    } catch (error) {
      console.error("Error fetching user reservations:", error);
      return [];
    }
  };

  const fetchAllReservations = async () => {
    try {
      const response = await api.get("/api/Reservations/FindAllReservations");
      console.log("All Reservations:", response.data);
      setAllReservations(response.data);
      console.log("All Reservations:", response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      return [];
    }
  };

  useEffect(() => {
    if (User) {
      fetchUserReservations(User._id);
    }
    fetchAllReservations();
  }, [User]);

  const deleteReservation = async (reservationId) => {
    try {
      const response = await api.delete(
        `/api/Reservations/deleteReservation/${reservationId}`
      );
      if (response.status === 200) {
        fetchUserReservations(User._id);
        fetchAllReservations();
        console.log("Reservation deleted successfully");
      } else {
        console.error("Failed to delete reservation:", response);
      }
    } catch (e) {
      console.error(
        "Error deleting user reservation:",
        e?.response || e.message || e
      );
    }
  };

  const contextValue = useMemo(
    () => ({
      createReservation,
      userReservations,
      Reservation,
      User,
      updateReservation,
      deleteReservation,
      fetchUserReservations,
      fetchAllReservations,
      allReservations,
    }),
    [createReservation, userReservations, Reservation, User, allReservations]
  );

  return (
    <ReservationContext.Provider value={contextValue}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error(
      "useReservationContext should be used within ReservationContext"
    );
  }

  return context;
};
