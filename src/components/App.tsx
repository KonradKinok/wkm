import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { LayoutPage } from "../pages/LayoutPage/LayoutPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PenaltiesPage = lazy(
  () => import("../pages/PenaltiesPage/PenaltiesPage"),
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="penalties" element={<PenaltiesPage />}></Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
