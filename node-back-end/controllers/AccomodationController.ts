import { Request, Response } from "express";
import Listing from "../models/Accomodation";
import { JwtUtil } from "../Utils/Jwt";
import mongoose from "mongoose";
import { CustomRequest } from "../middlewares/multer";

interface CreateListingRequestBody {
  title: string;
  location: string;
  price: number;
  description: string;
  isAvailable: boolean;
  type: string;
  amenities: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  reviews: string[];
  rating: number;
  images: string[];
}

interface MulterFile {
  filename: string;
  path: string;
}

interface CustomRequestWithFile extends CustomRequest {
  body: CreateListingRequestBody;
  file: Express.Multer.File;
}

export class AccommodationController {
  static async createListing(
    req: CustomRequestWithFile,
    res: Response
  ): Promise<any> {
    try {
      const {
        title,
        location,
        price,
        description,
        isAvailable,
        type,
        amenities,
        guests,
        bedrooms,
        bathrooms,
        reviews,
        rating,
        images,
      } = req.body;

      // Handle file upload via Multer
      // const file = req.file;

      // if (!file) {
      //   return res.status(400).json({ error: "Image is required" });
      // }

      // const fileUrl = `http://localhost:5000/uploads/${file.filename}`;

      // Continue with the normal processing
      const header_auth = req.headers.authorization;
      if (!header_auth) {
        return res.status(401).json({ error: "Authorization token missing" });
      }

      const token = header_auth.slice(7, header_auth.length);

      let decoded;
      try {
        decoded = await JwtUtil.JwtVerify(token);
      } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const hostId = decoded.aud;

      const newListing = new Listing({
        title,
        location,
        price,
        description,
        isAvailable,
        type,
        amenities,
        guests,
        bedrooms,
        bathrooms,
        images,
        host: hostId,
        rating,
        reviews,
      });

      try {
        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
      } catch (err: any) {
        console.error("Database Save Error:", err.message);
        res.status(500).json({
          error: "Error saving listing to the database",
          message: err.message,
        });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to create listing" });
    }
  }

  public static async imageUpload(req, res) {
    console.log("Received request to upload image...");

    try {
      if (!req.file) {
        console.log("No file uploaded");
        return res.status(400).json({ error: "No file uploaded" });
      }

      const protocol = req.protocol;
      const host = req.get("host");

      console.log("protocol :", protocol);
      console.log("host :", host);

      // Construct the image URL
      const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
      console.log("file url :", fileUrl);

      // Send the file URL back to the client
      return res.status(200).json({ imageUrl: fileUrl });
    } catch (err) {
      console.error("Image Upload Error:", err.message);
      return res.status(500).json({ error: "Failed to upload image" });
    }
  }

  static async getAllListings(req, res) {
    try {
      const listings = await Listing.find();

      res.status(200).json({
        success: true,
        data: listings,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Unable to fetch listings",
        error: error.message,
      });
    }
  }

  static async getListingByLocation(req, res) {
    try {
      const { location } = req.params;
      const listings = await Listing.find({ location: location });
      if (listings.length === 0) {
        return res
          .status(404)
          .json({ message: "No listings found for this location" });
      }
      res.status(200).json(listings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getListingById(req, res) {
    try {
      const { id } = req.params;

      const listing = await Listing.findById(id);

      if (!listing) {
        return res
          .status(404)
          .json({ message: "No listing found for this id" });
      }

      res.status(200).json(listing);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateListing(req, res) {
    try {
      const { id } = req.params;
      console.log("request parameters ", req.params);
      console.log("id :", id);

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid listing ID" });
      }

      const updateData = req.body;

      const updatedData = await Listing.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true }
      );

      if (!updatedData) {
        return res.status(404).json({ message: "Listing not found" });
      }

      return res.status(200).json({
        message: "Listing updated successfully",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error updating listing:", error.message, error.stack);
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  }

  static async deleteListing(req, res) {
    try {
      const { id } = req.params;

      const deletedListing = await Listing.findByIdAndDelete(id);

      if (!deletedListing) {
        return res.status(404).json({ message: "Listing not found" });
      }

      return res.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "An error occurred", error });
    }
  }
}
