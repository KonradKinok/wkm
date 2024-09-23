import React, { Suspense, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigation } from "../../components/Navigation/Navigation";
import scss from "./LayoutPage.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { selectWindowDimensions } from "../../components/redux/windowDimensions/selectorsWindowDimensions";
import { langDictionary } from "../../components/redux/language/constans";
import { useDispatch, useSelector } from "react-redux";
import { setWindowDimension } from "../../components/redux/windowDimensions/sliceWindowDimensions"; // Import właściwej akcji z Reduxa

const screen = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

export const LayoutPage: React.FC = () => {
  const currentLanguage = useSelector(selectLanguage);
  const currentScreen = useSelector(selectWindowDimensions);
  const [windowSize, setWindowSize] = useState<number | null>(null); // Zmieniono nazwę na windowSize
  const dispatch = useDispatch();

  useEffect(() => {
    setWindowSize(window.innerWidth); // Ustawianie rozmiaru okna
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
        <Link to="/" className={scss["application-title"]}>
          {langDictionary.navWkm[currentLanguage]}
        </Link>
        <Navigation />
      </header>
      <main className={scss["main"]}>
        <h1>{windowSize}</h1>
        <h2>{currentScreen}</h2>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
