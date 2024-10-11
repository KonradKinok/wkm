import React, { useEffect, useState } from "react";
import scss from "./ButtonUp.module.scss";
import { FaAngleDoubleUp } from "react-icons/fa";

export const ButtonUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Sprawdza, czy scroll przekroczył 20px
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Gładki scroll na górę strony
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      name="upButton"
      className={`${scss["up-button"]} ${isVisible ? scss["visible"] : ""}`} // Dodaje klasę visible, gdy przycisk ma się wyświetlać
      type="button"
      onClick={handleOnClick}
      style={{ display: isVisible ? "block" : "none" }} // Przycisk jest widoczny tylko, gdy isVisible jest true
    >
      <FaAngleDoubleUp />
    </button>
  );
};
