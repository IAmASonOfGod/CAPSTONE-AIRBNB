import express from "express";
import { ListingValidators } from "../validators/AccommodationValidator";
import { GlobalMiddleware } from "../middlewares/GlobalMiddlewares";
import { AccommodationController } from "../controllers/AccomodationController";
import upload from "../middlewares/multer";

const router = express.Router();

class AccomodationRouter {
  constructor() {
    this.postRoutes();
    this.getRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  postRoutes() {
    router.post(
      "/imageUpload",
      upload.single("image"),
      AccommodationController.imageUpload
    );

    router.post(
      "/createListing",
      ListingValidators.createListing(),
      GlobalMiddleware.checkErrors,
      GlobalMiddleware.auth,
      AccommodationController.createListing
    );
  }

  getRoutes() {
    router.get(
      "/listings",
      GlobalMiddleware.auth,
      AccommodationController.getAllListings
    );
     router.get(
      "/Userlistings",
      AccommodationController.getAllListings
    )
    router.get(
      "/listings/:id",
      GlobalMiddleware.auth,
      AccommodationController.getListingById
    );
    router.get(
      "/listings/:location",
      GlobalMiddleware.auth,
      AccommodationController.getListingByLocation
    );  
  }

  patchRoutes() {
    router.post(
      "/imageUpload",
      upload.single("image"),
      AccommodationController.imageUpload
    );

    router.patch(
      "/listings/update/:id",
      ListingValidators.updateListing(),
      GlobalMiddleware.checkErrors,
      GlobalMiddleware.auth,
      AccommodationController.updateListing
    );
  }

  deleteRoutes() {
    router.delete(
      "/listings/delete/:id",
      GlobalMiddleware.auth,
      AccommodationController.deleteListing
    );
  }
}

new AccomodationRouter();

export default router;
