import React from "react";
import { StyledImg } from "./Header.style";

const Logo = () => {
  return (
    <div>
      <StyledImg
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="Logo"
      />
      <h1>Welcome to Clarusway</h1>
    </div>
  );
};

export default Logo;
