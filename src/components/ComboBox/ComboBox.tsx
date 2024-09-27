import React, { useState } from "react";
import Select, { SingleValue } from "react-select";

export default function ComboBoxPage() {
  const [selectedOption, setSelectedOption] = useState<SingleValue<{
    value: string;
    label: string;
  }> | null>(null);

  return (
    <div className={scss["container-combobox-page"]}>
      <div>
        <Select
          defaultValue={selectedOption1}
          onChange={(option) => setSelectedOption1(option)}
          options={options}
        />
        {selectedOption1 && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedOption1.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
