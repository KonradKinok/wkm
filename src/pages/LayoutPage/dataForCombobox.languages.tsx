import React from "react";
import flagPL from "../../images/comboBox/flag-pl.svg";
import flagGB from "../../images/comboBox/flag-gb.svg";
import flagUA from "../../images/comboBox/flag-ua.svg";
import scss from "./LayoutPage.module.scss";
import { LanguageValue } from "../../components/redux/language/sliceLanguage";
export interface LanguageOption {
  value: LanguageValue; // typ LanguageValue zamiast string
  label: JSX.Element;
}

export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "var(--combobox-text-hover-background)" // Kolor dla wybranej opcji
      : state.isFocused
        ? "var(--combobox-text-hover-color)" // kolor tła przy hover
        : undefined,
    cursor: "pointer",

    color: state.isSelected
      ? "var(--combobox-text-color)"
      : "var(--combobox-text-color)", // Kolor tekstu dla opcji wybranej i reszty
    ":active": {
      backgroundColor: "var(--combobox-text-hover-background)", // Kolor tła, gdy opcja jest kliknięta
      color: "var(--combobox-text-color)",
    },
  }),
  control: (provided: any) => ({
    ...provided,
    cursor: "pointer",
    width: 180,
    backgroundColor: "var(--combobox-control-background)",
    borderColor: "var(--combobox-control-border)", // Kolor obramowania kontrolki
    ":hover": {
      borderColor: "var(--combobox-control-background)", // Kolor obramowania przy hover na select
    },
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "var(--combobox-text-color)", // Kolor tekstu wybranej wartości w kontrolce
  }),
};
// Opcje z ikonami
export const languageOptions: LanguageOption[] = [
  {
    value: "pl",
    label: (
      <div className={scss["combobox-item"]}>
        <img
          src={flagPL}
          alt="polish flag"
          style={{ width: "20px", marginRight: "10px" }}
        />
        Polski
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className={scss["combobox-item"]}>
        <img
          src={flagGB}
          alt="great britain flag"
          style={{ width: "20px", marginRight: "10px" }}
        />
        English
      </div>
    ),
  },
  {
    value: "ua",
    label: (
      <div className={scss["combobox-item"]}>
        <img
          src={flagUA}
          alt="ukrainian flag"
          style={{ width: "20px", marginRight: "10px" }}
        />
        Yкраїнська
      </div>
    ),
  },
];
