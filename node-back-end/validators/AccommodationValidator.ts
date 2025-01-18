import { body } from "express-validator";

export class ListingValidators {
  static createListing() {
    return [
      body("title", "Title is required").isString().notEmpty(),
      body("location", "Location is required").isString().notEmpty(),
      body("price", "Price per night is required")
        .isNumeric()
        .custom((price) => {
          if (price > 0) return true;
          throw "Price per night must be greater than zero";
        }),
      body("type", "Type is required")
        .isString()
        .notEmpty()
        .isIn([
          "Entire apartment",
          "Private room",
          "Shared room",
          "Entire house",
          "Whole villa"
        ]),
      body("guests", "Guests is required")
        .isNumeric()
        .custom((guests) => {
          if (guests >= 1) return true;
          throw "Guests must be at least 1";
        }),
      body("bedrooms", "Bedrooms is required")
        .isNumeric()
        .custom((bedrooms) => {
          if (bedrooms >= 1) return true;
          throw "There must be at least 1 bedroom";
        }),
      body("bathrooms", "Bathrooms is required")
        .isNumeric()
        .custom((bathrooms) => {
          if (bathrooms >= 1) return true;
          throw "There must be at least 1 bathroom";
        }),
      body("amenities", "Amenities should be an array of strings")
        .isArray()
        .custom((amenities) => {
          if (amenities.every((item) => typeof item === "string")) return true;
          throw "Each amenity should be a string";
        }),

      body("images", "Images should be an array of strings")
        .optional()
        .isArray()
        .custom((images) => {
          if (images.every((item) => typeof item === "string")) return true;
          throw "Each image should be a string (URL)";
        }),

      body("description", "Description is required").isString().notEmpty(),
      body("rating", "Rating must be a number between 0 and 5")
        .isNumeric()
        .custom((rating) => {
          if (rating >= 0 && rating <= 5) return true;
          throw "Rating must be between 0 and 5";
        }),

      body("reviews", "Reviews must be a number")
        .isNumeric()
        .custom((reviews) => {
          if (reviews >= 0) return true;
          throw "Reviews cannot be negative";
        }),
    ];
  }

  static updateListing() {
    return [
      body("title").optional().isString().withMessage("Title must be a string"),

      body("location")
        .optional()
        .isString()
        .withMessage("Location must be a string"),

      body("price")
        .optional()
        .isNumeric()
        .withMessage("Price per night must be a number")
        .custom((price) => {
          if (price > 0) return true;
          throw "Price per night must be greater than zero";
        }),

      body("type")
        .optional()
        .isString()
        .withMessage("Type must be a string")
        .isIn([
          "Entire apartment",
          "Entire house",
          "Private room",
          "Shared room",
          "Whole villa",
        ])
        .withMessage(
          "Type must be one of 'Entire apartment', 'Private room', 'Shared room', or 'Entire home'"
        ),

      body("guests")
        .optional()
        .isNumeric()
        .withMessage("Guests must be a number")
        .custom((guests) => {
          if (guests >= 1) return true;
          throw "Guests must be at least 1";
        }),

      body("bedrooms")
        .optional()
        .isNumeric()
        .withMessage("Bedrooms must be a number")
        .custom((bedrooms) => {
          if (bedrooms >= 1) return true;
          throw "There must be at least 1 bedroom";
        }),

      body("bathrooms")
        .optional()
        .isNumeric()
        .withMessage("Bathrooms must be a number")
        .custom((bathrooms) => {
          if (bathrooms >= 1) return true;
          throw "There must be at least 1 bathroom";
        }),

      body("amenities")
        .optional()
        .isArray()
        .withMessage("Amenities must be an array of strings")
        .custom((amenities) => {
          if (amenities.every((item) => typeof item === "string")) return true;
          throw "Each amenity should be a string";
        }),

      body("images")
        .optional()
        .isArray()
        .withMessage("Images must be an array of strings")
        .custom((images) => {
          if (images.every((item) => typeof item === "string")) return true;
          throw "Each image should be a string (URL)";
        }),

      body("description")
        .optional()
        .isString()
        .withMessage("Description must be a string"),

      body("rating")
        .optional()
        .isNumeric()
        .withMessage("Rating must be a number between 0 and 5")
        .custom((rating) => {
          if (rating >= 0 && rating <= 5) return true;
          throw "Rating must be between 0 and 5";
        }),

      body("reviews")
        .optional()
        .isNumeric()
        .withMessage("Reviews must be a number")
        .custom((reviews) => {
          if (reviews >= 0) return true;
          throw "Reviews cannot be negative";
        }),
    ];
  }
}
