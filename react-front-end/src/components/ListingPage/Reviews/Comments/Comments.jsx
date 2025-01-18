import React from "react";
import { CommentsWrapper } from "./Comments.styled";
import { ReactComponent as ShowMore } from "./ShowMore.svg";

const Comments = () => {
  return (
    <CommentsWrapper>
      <div className="row1">
        <div className="airbnb-comment-wrapper1">
          <div className="user">
            <div className="user-profile-pic"></div>
            <div className="user-details">
              <div className="user-name">J Gomez</div>
              <div className="date">
                <p>January 2025</p>
              </div>
            </div>
          </div>
          <div className="user-comment">
            <p>Host was very attentive</p>
          </div>
        </div>
        <div className="airbnb-comment-wrapper1">
          <div className="user">
            <div className="user-profile-pic-2"></div>
            <div className="user-details">
              <div className="user-name">L Ratau</div>
              <div className="date">
                <p>December 2024</p>
              </div>
            </div>
          </div>
          <div className="user-comment">
            <p>Lovely accommodation. Host was brilliant as well.</p>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="airbnb-comment-wrapper">
          <div className="user">
            <div className="user-profile-pic-3"></div>
            <div className="user-details">
              <div className="user-name">Peace Maluleka</div>
              <div className="date">
                <p>November 2024</p>
              </div>
            </div>
          </div>
          <div className="row-user-comment">
            <p>
              We really enjoyed our time here. The apartment was spotless,
              well-organized, and had all the essentials we needed for a
              comfortable stay. The host was super responsive...
            </p>
          </div>
          <div className="show-more-wrapper">
            <div className="show-more">
              <p>Show more</p>
            </div>
            <div className="chevron-right">
              <ShowMore />
            </div>
          </div>
        </div>
        <div className="airbnb-comment-wrapper">
          <div className="user">
            <div className="user-profile-pic-4"></div>
            <div className="user-details">
              <div className="user-name">Stephny R</div>
              <div className="date">
                <p>December 2024</p>
              </div>
            </div>
          </div>
          <div className="row-user-comment">
            <p>
              This place felt like a home away from home. The decor was stylish
              and thoughtful, and the bed was incredibly comfortable...
            </p>
          </div>
          <div className="show-more-wrapper">
            <div className="show-more">
              <p>Show more</p>
            </div>
            <div className="chevron-right">
              <ShowMore />
            </div>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="airbnb-comment-wrapper">
          <div className="user">
            <div className="user-profile-pic-5"></div>
            <div className="user-details">
              <div className="user-name">Mbali Dlamini</div>
              <div className="date">
                <p>February 2024</p>
              </div>
            </div>
          </div>
          <div className="row-user-comment">
            <p>
              The accommodation exceeded our expectations in every way. The
              kitchen was fully equipped, which made cooking meals a breeze...
            </p>
          </div>
          <div className="show-more-wrapper">
            <div className="show-more">
              <p>Show more</p>
            </div>
            <div className="chevron-right">
              <ShowMore />
            </div>
          </div>
        </div>
        <div className="airbnb-comment-wrapper">
          <div className="user">
            <div className="user-profile-pic-6"></div>
            <div className="user-details">
              <div className="user-name">K Mash</div>
              <div className="date">
                <p>January 2025</p>
              </div>
            </div>
          </div>
          <div className="row-user-comment">
            <p>
              This property was everything we were looking for. It was spacious
              enough for our group of four, and the modern amenities like the
              smart TV and fast Wi-Fi made our stay even better...
            </p>
          </div>
          <div className="show-more-wrapper">
            <div className="show-more">
              <p>Show more</p>
            </div>
            <div className="chevron-right">
              <ShowMore />
            </div>
          </div>
        </div>
      </div>
      <div className="show-all-btn">
        <button><p>Show all 36 reviews</p></button>
      </div>
    </CommentsWrapper>
  );
};

export default Comments;
