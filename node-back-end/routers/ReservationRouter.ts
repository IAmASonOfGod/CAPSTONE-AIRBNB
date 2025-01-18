import express from "express";
import { ReservationValidators } from "../validators/ReservationValidators";
import { GlobalMiddleware } from "../middlewares/GlobalMiddlewares";
import { ReservationController } from "../controllers/ReservationController";

const router = express.Router();

class ReservationRouter {
  constructor() {
    this.postRoutes();
    this.deleteRoutes();
    this.getRoutes();
  }

  postRoutes() {
    router.post(
      "/createReservation",
      ReservationValidators.createReservation(),
      GlobalMiddleware.checkErrors,
      GlobalMiddleware.auth,
      ReservationController.createReservation
    );
  }

  getRoutes() {
    router.get(
      "/FindReservation/:UserId",
      GlobalMiddleware.auth,
      ReservationController.getReservationByUserId
    );

    router.get(
      "/FindAllReservations",
      GlobalMiddleware.auth,
      ReservationController.getAllReservation
    );
  }

  deleteRoutes() {
    router.delete(
      "/deleteReservation/:reservationId",
      GlobalMiddleware.auth,
      ReservationController.deleteReservation
    );
  }
}

new ReservationRouter();

export default router;
