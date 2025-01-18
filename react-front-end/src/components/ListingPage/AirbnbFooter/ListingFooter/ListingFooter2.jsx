import React from "react";
import { ListingFooter2Wrapper } from "./ListingFooter2.styled";
import { ReactComponent as Globe } from "./Globe.svg";
import { ReactComponent as Dollar } from "./Dollar.svg";
import { ReactComponent as FB } from "./FB.svg";
import { ReactComponent as X } from "./X.svg";
import { ReactComponent as Insta } from "./Insta.svg";

const ListingFooter2 = () => {
  return (
    <ListingFooter2Wrapper>
      <div className="column-wrapper1">
        <div className="column">
          <div className="column-header">
            <p>Support</p>
          </div>
          <div className="column-item">
            <p>Help Center</p>
          </div>
          <div className="column-item">
            <p>Safety Information</p>
          </div>
          <div className="column-item">
            <p>Cancellation Options</p>
          </div>
          <div className="column-item">
            <p>Our Covid-19 Response</p>
          </div>
          <div className="column-item">
            <p>Supporting People With Disabilities</p>
          </div>
          <div className="column-item">
            <p>Help Center</p>
          </div>
        </div>
        <div className="column">
          <div className="column-header">
            <p>Community</p>
          </div>
          <div className="column-item">
            <p>Airbnb.org: Disaster Relief Housing</p>
          </div>
          <div className="column-item">
            <p>Support: Afghan Refugees</p>
          </div>
          <div className="column-item">
            <p>Celebrating Diversity And Belonging</p>
          </div>
          <div className="column-item">
            <p>Combating Discrimination</p>
          </div>
        </div>
        <div className="column">
          <div className="column-header">
            <p>Hosting</p>
          </div>
          <div className="column-item">
            <p>Try Hosting</p>
          </div>
          <div className="column-item">
            <p>AirCover: Protection For Hosts</p>
          </div>
          <div className="column-item">
            <p>Explore Hosting Resources</p>
          </div>
          <div className="column-item">
            <p>OVisit Our Community Forum</p>
          </div>
          <div className="column-item">
            <p>How To Host Responsibly</p>
          </div>
        </div>
        <div className="column">
          <div className="column-header">
            <p>About</p>
          </div>
          <div className="column-item">
            <p>Newsroom</p>
          </div>
          <div className="column-item">
            <p>Learn About New Features</p>
          </div>
          <div className="column-item">
            <p>Leeters From Our Founders</p>
          </div>
          <div className="column-item">
            <p>Careers</p>
          </div>
          <div className="column-item">
            <p>Investors</p>
          </div>
          <div className="column-item">
            <p>Airbnb Luxe</p>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="sub-footer">
        <div className="sub-footer-left">
          <div className="airbnb-inc">
            <p>© 2022 Airbnb, Inc.</p>
          </div>
          <div className="privacy">
            <p>· Privacy </p>
          </div>
          <div className="privacy">
            <p>· Terms </p>
          </div>
          <div className="Sitemap">
            <p>· Sitemap</p>
          </div>
        </div>
        <div className="sub-footer-right">
          <div className="language-currency">
            <div className="language">
              <div className="globe">
                <Globe />
              </div>
              <p>English(UK)</p>
            </div>
            <div className="currency">
              <div className="dollar-sign">
                <Dollar />
              </div>
              <p>USD</p>
            </div>
          </div>
          <div className="socials">
            <div className="social-icon">
              <FB />
            </div>
            <div className="social-icon">
              <X />
            </div>
            <div className="social-icon">
              <Insta />
            </div>
          </div>
        </div>
      </div>
    </ListingFooter2Wrapper>
  );
};

export default ListingFooter2;
