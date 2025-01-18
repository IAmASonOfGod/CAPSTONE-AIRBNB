import { body } from "express-validator";

export class ReservationValidators {
  static createReservation() {
    return [
      body("listingId").isMongoId().withMessage("Invalid listing ID format"),
      body("checkInDate")
        .isISO8601()
        .toDate()
        .withMessage("Invalid check-in date"),
      body("checkOutDate")
        .isISO8601()
        .toDate()
        .withMessage("Invalid check-out date")
        .custom((checkOutDate, { req }) => {
          const checkInDate = new Date(req.body.checkInDate);
          if (checkOutDate <= checkInDate) {
            throw new Error("Check-out date must be after check-in date");
          }
          return true;
        }),
      body("guests").isInt({ min: 1 }).withMessage("Guests must be at least 1"),
    ];
  }
}
