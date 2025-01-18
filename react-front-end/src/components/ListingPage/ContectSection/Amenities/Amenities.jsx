import React from "react";
import { AmenitiesWrapper } from "./Amenities.styled";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PetsIcon from '@mui/icons-material/Pets';
import SecurityIcon from '@mui/icons-material/Security';
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DryIcon from "@mui/icons-material/Dry";
import WifiIcon from "@mui/icons-material/Wifi";
import YardIcon from "@mui/icons-material/Yard";

const Amenities = () => {
  return (
    <AmenitiesWrapper>
      <div className="Amenities-title">
        <p>What this place offers</p>
      </div>
      <div className="Amenities-section">
        <div className="Amenities-section-column1">
          <div className="column-item">
            <YardIcon />
            <div className="Amenity-label">
              <p>Garden view</p>
            </div>
          </div>
          <div className="column-item">
            <WifiIcon />
            <div className="Amenity-label">
              <p>Wifi</p>
            </div>
          </div>
          <div className="column-item">
            <LocalLaundryServiceIcon />
            <div className="Amenity-label">
              <p>Free washer - in building</p>
            </div>
          </div>
          <div className="column-item">
            <AcUnitIcon />
            <div className="Amenity-label">
              <p>Central air conditioning</p>
            </div>
          </div>
          <div className="column-item">
            <KitchenIcon />
            <div className="Amenity-label">
              <p>Refrigerator</p>
            </div>
          </div>
        </div>
        <div className="Amenities-section-column2">
          <div className="column-item">
            <KitchenIcon />
            <div className="Amenity-label">
              <p>Kitchen</p>
            </div>
          </div>
          <div className="column-item">
            <PetsIcon />
            <div className="Amenity-label">
              <p>Pets allowed</p>
            </div>
          </div>
          <div className="column-item">
            <DryIcon />
            <div className="Amenity-label">
              <p>Dryer</p>
            </div>
          </div>
          <div className="column-item">
            <SecurityIcon />
            <div className="Amenity-label">
              <p>Security cameras on property</p>
            </div>
          </div>
          <div className="column-item">
            <PedalBikeIcon />
            <div className="Amenity-label">
              <p>Bicycles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Show-more-amenities">
        <button>
          <p>Show all 40 amenities</p>
        </button>
      </div>
    </AmenitiesWrapper>
  );
};

export default Amenities;
