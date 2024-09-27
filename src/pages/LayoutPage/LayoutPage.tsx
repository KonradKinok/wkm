import React, { Suspense, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Select, { SingleValue } from "react-select";
import { Navigation } from "../../components/Navigation/Navigation";
import scss from "./LayoutPage.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { selectWindowDimensions } from "../../components/redux/windowDimensions/selectorsWindowDimensions";
import { langDictionary } from "../../components/redux/language/constans";
import { useDispatch, useSelector } from "react-redux";
import { setWindowDimension } from "../../components/redux/windowDimensions/sliceWindowDimensions"; // Import właściwej akcji z Reduxa
import { setLanguage } from "../../components/redux/language/sliceLanguage";
import { customStyles, languageOptions } from "./dataForCombobox.languages";
import * as globalFunctions from "../../globalFunctions/functions";

const LOCAL_STORAGE_KEY_LANGUAGE = "language";

const screen = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

export const LayoutPage: React.FC = () => {
  const currentLanguage = useSelector(selectLanguage);

  const defaultLanguageComboBox = () => {
    const languageFromLocalStorage = globalFunctions.loadLocalStorage(
      LOCAL_STORAGE_KEY_LANGUAGE,
    );
    if (languageFromLocalStorage) {
      const language = languageFromLocalStorage.currentLanguage;
      return languageOptions.find((option) => option.value === language);
    }
    console.log("currentLanguage", currentLanguage);
    return languageOptions.find((option) => option.value === currentLanguage);
  };
  const currentScreen = useSelector(selectWindowDimensions);
  const [windowSize, setWindowSize] = useState<number | null>(null); // Zmieniono nazwę na windowSize
  const dispatch = useDispatch();
  const handleChangeLanguage = (option) => {
    if (option) {
      dispatch(setLanguage(option.value));
      globalFunctions.saveLocalStorage(LOCAL_STORAGE_KEY_LANGUAGE, {
        currentLanguage: option.value,
      });
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth); // Ustawianie rozmiaru okna
    const defaultLanguage = defaultLanguageComboBox();
    dispatch(setLanguage(defaultLanguage?.value));
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth); // Ustawianie rozmiaru okna na zmianę szerokości
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize !== null) {
      if (windowSize <= 480) {
        dispatch(setWindowDimension(screen.mobile)); // Teraz używamy akcji Reduxa
      } else if (windowSize > 480 && windowSize <= 769) {
        dispatch(setWindowDimension(screen.tablet));
      } else {
        dispatch(setWindowDimension(screen.desktop));
      }
    }
  }, [windowSize, dispatch]);

  return (
    <div className={scss["main-container"]}>
      <header className={scss["header"]}>
        <div className={scss["title-combobox-container"]}>
          <Link to="/" className={scss["application-title"]}>
            {langDictionary.navWkm[currentLanguage]}
          </Link>
          <div>
            <Select
              defaultValue={defaultLanguageComboBox()}
              onChange={(option) => handleChangeLanguage(option)}
              options={languageOptions}
              isSearchable={false}
              styles={customStyles}
            />
          </div>
        </div>
        <Navigation />
      </header>
      <main className={scss["main"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
