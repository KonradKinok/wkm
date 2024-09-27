import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { setLanguage } from "../redux/language/sliceLanguage";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { Languages, langDictionary } from "../redux/language/constans";
import scss from "./Navigation.module.scss";

interface NavigationProps {
  onLinkClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <nav className={scss["nav-navigation"]}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? scss.active : "")}
        onClick={onLinkClick}>
        {langDictionary.navHome[currentLanguage]}
      </NavLink>

      <NavLink
        to="penalties"
        className={({ isActive }) => (isActive ? scss.active : "")}
        onClick={onLinkClick}>
        {langDictionary.navPenalties[currentLanguage]}
      </NavLink>
    </nav>
  );
};
