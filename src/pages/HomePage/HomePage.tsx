import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { langDictionary } from "../../components/redux/language/constans";
import scss from "./HomePage.module.scss";

export default function HomePage() {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <div className={scss["container-home-page"]}>
      <h1>HomePage {currentLanguage}</h1>
    </div>
  );
}
