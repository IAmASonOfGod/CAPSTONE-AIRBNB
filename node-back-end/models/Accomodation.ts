import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "Entire apartment",
      "Private room",
      "Shared room",
      "Entire house",
      "Whole villa",
    ],
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  amenities: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: {
    default: 0,
    type: Number,
    min: 0,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
