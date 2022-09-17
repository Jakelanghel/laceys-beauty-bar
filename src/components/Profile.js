import React from "react";
import { StyledProfile } from "./styled/Profile.Styled";

const Profile = (props) => {
  const bioElements = props.bio.map((p, i) => {
    const className = i + 1 !== props.bio.length ? "margin-btm" : "";
    return (
      <p className={className} key={i}>
        {p}
      </p>
    );
  });
  return (
    <StyledProfile className={props.class}>
      <div className={props.inverted ? "inverted-container row" : "row"}>
        <div className="img-container box-shadow-1">
          <div className="img-bkg">
            <img src={props.img} alt="lacey dean" className="profile-img" />
          </div>
        </div>

        <div className="container-card">
          <div className="card ">
            <h2>{props.name}</h2>
            {bioElements}
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
