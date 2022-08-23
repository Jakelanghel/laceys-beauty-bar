import React from "react";
import { StyledProfile } from "./styled/Profile.Styled";

const Profile = (props) => {
  return (
    <StyledProfile className={props.class}>
      <div className={props.inverted ? "inverted-container row" : "row"}>
        <div className="img-container box-shadow-1">
          <img src={props.img} alt="lacey dean" className="profile-img" />
        </div>

        <div className="card box-shadow-1">
          <h2>{props.name}</h2>
          <p>{props.bio}</p>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
