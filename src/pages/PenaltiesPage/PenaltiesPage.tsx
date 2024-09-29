import React from "react";
import scss from "./PenaltiesPage.module.scss";

export default function PenaltiesPage() {
  return (
    <div className={scss["container-penalties-page"]}>
      <div className={scss["container-form"]}>
        <form className={scss["form"]} action="">
          <label htmlFor="toggle-switch">
            <p className={scss["custom-title"]}>Free cancellation</p>
          </label>
          <input
            type="checkbox"
            name="toggle-switch"
            id="toggle-switch"
            className={scss["toggle-switch"]}
          />
        </form>
      </div>
    </div>
  );
}
