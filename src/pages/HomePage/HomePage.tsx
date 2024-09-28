import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { langDictionary } from "../../components/redux/language/constans";
import scss from "./HomePage.module.scss";
import obrazekPlacacyMezczyzna from "../../images/homePage/obrazekPlacacyMezczyzna.jpg";
import samochodBezTla from "../../images/homePage/samochodBezTla.png";
import samochodPlusTloJpg from "../../images/homePage/samochodPlusTlo.jpg";
import samochodPlusTloPng from "../../images/homePage/samochodPlusTlo.png";
import samochodWKM from "../../images/homePage/samochodWKM.jpg";
export default function HomePage() {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <div className={scss["container-home-page"]}>
      <p>
        Sprawdź, kiedy musisz zarejestrować samochód lub zgłosić jego zbycie.
      </p>
      <p>Nie przekrocz ustawowych terminów i uniknij kar!</p>
      <p>Zarejestruj lub zgłoś zbycie samochodu na czas.</p>
      <div className={scss["try-img"]}>
        <img src={obrazekPlacacyMezczyzna} alt="" />
      </div>
      <div className={scss["try-img"]}>
        <img src={samochodBezTla} alt="" />
      </div>
      <div className={scss["try-img"]}>
        <img src={samochodPlusTloJpg} alt="" />
      </div>
      <div className={scss["try-img"]}>
        <img src={samochodPlusTloPng} alt="" />
      </div>
      <div className={scss["try-img"]}>
        <img src={samochodWKM} alt="" />
      </div>
    </div>
  );
}
