import React, { Suspense, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Select, { SingleValue } from "react-select";
import { Navigation } from "../../components/Navigation/Navigation";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import { Footer } from "../../components/Footer/Footer";
import { selectWindowDimensions } from "../../components/redux/windowDimensions/selectorsWindowDimensions";
import { setWindowDimension } from "../../components/redux/windowDimensions/sliceWindowDimensions";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { langDictionary } from "../../components/redux/language/constans";
import { setLanguage } from "../../components/redux/language/sliceLanguage";
import {
  customStyles,
  languageOptions,
  LanguageOption,
} from "./dataForCombobox.languages";
import { LanguageValue } from "../../components/redux/language/sliceLanguage";
import * as globalFunctions from "../../globalFunctions/functions";
import { Loader } from "../../components/Loader/Loader";
import scss from "./LayoutPage.module.scss";
interface LanguageLocalStorage {
  currentLanguage: string;
}
const LOCAL_STORAGE_KEY_LANGUAGE = "language";

const screen = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

export const LayoutPage: React.FC = () => {
  const currentLanguage = useSelector(selectLanguage);

  const defaultLanguageComboBox = (): LanguageOption | undefined => {
    const languageFromLocalStorage = globalFunctions.loadLocalStorage(
      LOCAL_STORAGE_KEY_LANGUAGE,
    ) as LanguageLocalStorage | null;

    if (languageFromLocalStorage) {
      const language =
        languageFromLocalStorage.currentLanguage as LanguageValue;
      return languageOptions.find((option) => option.value === language);
    }

    return languageOptions.find((option) => option.value === currentLanguage);
  };

  const currentScreen = useSelector(selectWindowDimensions);
  const [windowSize, setWindowSize] = useState<number | null>(null); // Zmieniono nazwę na windowSize
  const dispatch = useDispatch();

  const handleChangeLanguage = (option: SingleValue<LanguageOption>): void => {
    if (option) {
      dispatch(setLanguage(option.value)); // Użyj zdefiniowanego typu
      globalFunctions.saveLocalStorage(LOCAL_STORAGE_KEY_LANGUAGE, {
        currentLanguage: option.value,
      });
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth); // Ustawianie rozmiaru okna
    const defaultLanguage = defaultLanguageComboBox();
    dispatch(setLanguage(defaultLanguage?.value || "pl"));
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

  const isMobile: boolean = currentScreen !== screen.desktop;

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
              menuPortalTarget={document.body} // Portal, który zapewnia renderowanie listy na poziomie document.body
              menuPosition="fixed" // Zapewnia, że pozycjonowanie menu jest "fixed"
              menuShouldBlockScroll={true} // Opcjonalnie: blokuje scroll podczas otwartego menu
            />
          </div>
        </div>
        {isMobile ? <MobileMenu /> : <Navigation />}
      </header>
      <main className={scss["main"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
