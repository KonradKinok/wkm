import React, { useEffect, useState } from "react";
import scss from "./ButtonUp.module.scss";
import { FaAngleDoubleUp } from "react-icons/fa";

export const ButtonUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      name="upButton"
      className={`${scss["up-button"]} ${isVisible ? scss["visible"] : ""}`}
      type="button"
      onClick={handleOnClick}
      style={{ display: isVisible ? "block" : "none" }}>
      <FaAngleDoubleUp />
    </button>
  );
};
