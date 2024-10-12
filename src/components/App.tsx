import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PenaltiesPage = lazy(
  () => import("../pages/PenaltiesPage/PenaltiesPage"),
);
const LegalRegulationsPage = lazy(
  () => import("../pages/LegalRegulationsPage/LegalRegulationsPage"),
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="penalties" element={<PenaltiesPage />} />
        <Route path="legalregulations" element={<LegalRegulationsPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
