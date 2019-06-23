import React from "react";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(50, 50, 50, 0.4), rgba(50, 50, 50, 0.4)), url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slider__wrapper--slide" style={styles} />;
};

export default Slide;
