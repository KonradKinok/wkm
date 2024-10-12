import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { langDictionary } from "../../components/redux/language/constans";
import obrazekPlacacyMezczyzna from "../../images/homePage/obrazekPlacacyMezczyzna.jpg";
import samochodPlusTloJpg from "../../images/homePage/samochodPlusTlo.jpg";
import scss from "./HomePage.module.scss";

export default function HomePage() {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <div className={scss["container-home-page"]}>
      <p>{langDictionary.homePageFirstText[currentLanguage]}</p>

      <div className={scss["img-container"]}>
        <img src={samochodPlusTloJpg} alt="purple car" />
      </div>
      <p>{langDictionary.homePageSecondText[currentLanguage]}</p>

      <div className={scss["img-container"]}>
        <img src={obrazekPlacacyMezczyzna} alt="man pays the penalty" />
      </div>

      <p>{langDictionary.homePageThirdText[currentLanguage]}</p>
      <p>
        {langDictionary.homePageFourthTextFirstPart[currentLanguage]}{" "}
        <Link to="penalties" className={scss["link"]}>
          {langDictionary.homePageFourthTextSecondPart[currentLanguage]}
        </Link>
      </p>
    </div>
  );
}
