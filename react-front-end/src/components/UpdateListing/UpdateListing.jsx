import React, { useState, useEffect } from "react";
import { FormContainer } from "./UpdateListing.styled";
import { ReactComponent as AirbnbLogo } from "./AirbnbLogo.svg";
import { ReactComponent as DropDownMenu } from "./DropDownMenu.svg";
import { useLoginContext } from "../../Context/LoginContext.tsx";
import { useNavigate } from "react-router-dom";
import { useListingUpdate } from "../../Context/ListingUpdateContext.tsx";
import { useListingContext } from "../../Context/CreateListingContext.tsx";
import { useViewListingContext } from "../../Context/ViewListingContext.tsx";

const Form = () => {
  const { loggedInUser, logoutUser } = useLoginContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { formData, handleSubmit, handleChange, setPreviousImg } =
    useListingUpdate();
  const { setFormData, setImages } = useListingContext();
  const [imagePreviews, setImagePreviews] = useState([]); // Local state to hold previews
  const [typeSelected, setTypeSelected] = useState(false);
  const { listings, fetchListings } = useViewListingContext();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logoutUser();
    setIsDropdownOpen(false);
    navigate("/");
  };

   useEffect(() => {
     if (
       listings &&
       listings[0] &&
       listings[0].images &&
       listings[0].images[0]
     ) {
       setImagePreviews([listings[0].images[0]]);
     }
   }, [listings]);

  const handleImageChange = (e) => {
    console.log(listings);
    const files = e.target.files;
    const previews = [];
    const images = [];

    if (!files) {
      setPreviousImg(imagePreviews); 
      console.log("Image previews :", imagePreviews);
      return;
    }

    console.log("Files :", files);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push(event.target.result);
        images.push(event.target.result);
        if (previews.length === files.length) {
          setImagePreviews(previews);
          setImages(images); // Update images in context
          console.log("images :", images);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  useEffect(() => {
    if (formData.images && formData.images.length > 0) {
      setImagePreviews([formData.images[0]]);
    }
  }, [formData.images]);

  const handleCancel = () => {
    navigate("/HostListing");
  };

  return (
    <FormContainer>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <AirbnbLogo />
        </div>
        <div className="right-dropdown-menu">
          <p>{loggedInUser ? loggedInUser.username : "Unauthorized user"}</p>
          <div onClick={toggleDropdown}>
            <DropDownMenu />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="logout-p" onClick={handleLogout}>
                <p>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <a
        href="#"
        className="view-listings"
        onClick={() => navigate("/HostListing")}
      >
        <p>View listings</p>
      </a>
      <hr />
      <h2>Update Listing</h2>
      <form
        className="form"
        onSubmit={handleSubmit}
        onChange={handleImageChange}
      >
        <label className="label">Title</label>
        <input
          type="text"
          placeholder="Enter listing title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input"
        />

        <div className="form-row">
          <div>
            <label className="label">Bedrooms</label>
            <input
              type="number"
              placeholder="Number of bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Baths</label>
            <input
              type="number"
              placeholder="Number of baths"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label className="label">Rating</label>
            <input
              type="number"
              placeholder="Enter rating (e.g., 4.5)"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              step="0.1"
              max="5"
              min="0"
              className="input"
            />
          </div>
          <div>
            <label className="label">Reviews</label>
            <input
              type="number"
              placeholder="Number of reviews"
              name="reviews"
              value={formData.reviews}
              onChange={handleChange}
              step="1"
              min="0"
              className="input"
            />
          </div>
        </div>

        <div className="form-row amenities">
          <div>
            <label className="label" htmlFor="property-type">
              Type
            </label>
            <div className="type-row amenities">
              <select
                className="type-select"
                id="property-type"
                name="type"
                value={formData.type || ""}
                onChange={(e) => {
                  handleChange(e);
                  setTypeSelected(false);
                }}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="Entire apartment">Entire apartment</option>
                <option value="Private room">Private room</option>
                <option value="Shared room">Shared room</option>
                <option value="Entire house">Entire house</option>
                <option value="Whole villa">Whole villa</option>
              </select>
              <button
                type="button"
                className={`add-type-button ${typeSelected ? "selected" : ""}`}
                onClick={() => {
                  const selectedType = formData.type;
                  if (selectedType) {
                    setTypeSelected(true); //
                    console.log("Type added:", selectedType);
                  } else {
                    setTypeSelected(false);
                    alert("Please select a type before adding.");
                  }
                }}
              >
                Add Type
              </button>
            </div>
          </div>
        </div>

        <label className="label">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="input"
        />

        <label className="label">Description</label>
        <textarea
          placeholder="Add a description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="textarea"
        ></textarea>

        <label className="label">Price</label>
        <input
          type="number"
          placeholder="Enter price per night"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="input"
        />

        <div className="form-row">
          <div>
            <label className="label">Guests</label>
            <input
              type="number"
              placeholder="Number of guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Amenities</label>
            <input
              type="text"
              placeholder="Enter amenities (e.g., WiFi, Pool, etc.)"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group large">
            <label className="label">Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="input-all-white"
              // onChange={handleImageChange}
            />
          </div>
        </div>

        {imagePreviews.length > 0 && (
          <div className="image-previews">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="image-preview"
              />
            ))}
          </div>
        )}

        <div className="form-row">
          <button type="submit" className="button create-button">
            Update Listing
          </button>
          <button
            type="button"
            className="button cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;
