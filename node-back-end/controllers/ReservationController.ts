import Listing from "../models/Accomodation";
import Reservation from "../models/Reservation";

export class ReservationController {
  static async createReservation(req, res) {
    try {
      const {
        UserId,
        listingId,
        checkInDate,
        checkOutDate,
        totalPrice,
        guests,
      } = req.body;

      const ExistingListing = await Listing.findById(listingId);

      if (!ExistingListing) throw new Error("Accommodation not found");

      console.log("Existing listing :", ExistingListing);

      const reservation = new Reservation({
        userId: UserId,
        listingId,
        checkInDate,
        checkOutDate,
        totalPrice,
        guests,
      });

      console.log("reservation :", reservation);

      await reservation.save();
      res
        .status(201)
        .json({ message: "Reservation created successfully", reservation });
    } catch (error) {
      res.status(500).json({ message: "Error creating reservation", error });
    }
  }

  static async getReservationByUserId(req, res) {
    const { UserId } = req.params;

    try {
      const reservations = await Reservation.find({ userId: UserId })
        .populate("userId")
        .populate("listingId");

      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve reservations",
        error: error.message,
      });
    }
  }

  static async getAllReservation(req, res) {
    try {
    
      const reservations = await Reservation.find({})
        .populate("userId") 
        .populate("listingId"); 
      res.status(200).json(reservations);
    } catch (error) {

      res.status(500).json({
        message: "Failed to retrieve reservations",
        error: error.message,
      });
    }
  }

  static async deleteReservation(req, res) {
    try {
      const { reservationId } = req.params;

      console.log("req params :", req.params);
      const deletedReservation = await Reservation.findByIdAndDelete(
        reservationId
      );
      if (!deletedReservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      res.status(200).json({ message: "Reservation deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
}
