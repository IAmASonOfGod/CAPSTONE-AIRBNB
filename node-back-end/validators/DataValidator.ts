import { Request, Response, NextFunction } from "express";

// Extending the Request interface to include sanitizedData
declare global {
  namespace Express {
    interface Request {
      sanitizedData?: { amenities: string[]; images: string[] }; // Declare sanitizedData type
    }
  }
}

export class DataValidators {
  static sanitizeAndValidateData(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    // Ensure the return type is void here
    const errors: string[] = [];
    const sanitizedData: { amenities: string[]; images: string[] } = {
      amenities: [],
      images: [],
    };

    const data: { amenities: string[]; images: string[] } = req.body;

    // Validate amenities
    if (Array.isArray(data.amenities)) {
      data.amenities.forEach((item: string) => {
        if (typeof item === "string") {
          sanitizedData.amenities.push(item);
        } else {
          errors.push(`Invalid value for amenity: ${item}`);
        }
      });
    } else {
      errors.push("Amenities should be an array");
    }

    // Validate images
    if (Array.isArray(data.images)) {
      data.images.forEach((item: string) => {
        if (typeof item === "string") {
          sanitizedData.images.push(item);
        } else {
          errors.push(`Invalid value for image: ${item}`);
        }
      });
    } else {
      errors.push("Images should be an array");
    }

    // If there are errors, send a response and prevent further processing
    if (errors.length > 0) {
      res.status(400).json({ errors }); // No return needed here, this is just a response
      return; // We stop the execution here, but the function still returns `void`
    }

    // Otherwise, add sanitized data to request and continue to the next middleware
    req.sanitizedData = sanitizedData;

    // Call next() if there are no errors
    next();
  }
}
