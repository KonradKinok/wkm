import React from "react";
import scss from "./CheckboxRegular.module.scss";

interface CheckboxRegularProps {
  checked: boolean;
  // onChange: (checked: boolean) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  labelText?: string;
}

export const CheckboxRegular: React.FC<CheckboxRegularProps> = ({
  checked,
  onChange,
  name,
  labelText,
}) => {
  return (
    <div className={scss["checkboxRegular-main-container"]}>
      <label className={scss["checkbox-container"]}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
        />
        <span className={scss["label-text"]}>{labelText}</span>
        <span className={scss["checkmark"]}></span>
      </label>
    </div>
  );
};
