import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const avatar = props.avatar === "" ? props.imageProfile : props.avatar;
  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
