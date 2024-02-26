import React from "react";
import RadioButton from "./RadioButton";
import style from "./RadioButton.module.css"

const RadioButtonContainer = ({ checked, onRadioButtonChange }) => {
  return (
    <div className={style.RadioContainer}>
      <RadioButton
        label="Deficiente"
        value="deficiente"
        checked={checked === "deficiente"}
        onChange={() => onRadioButtonChange("deficiente")}
      />
      <RadioButton
        label="Regular"
        value="regular"
        checked={checked === "regular"}
        onChange={() => onRadioButtonChange("regular")}
      />
      <RadioButton
        label="Bom"
        value="bom"
        checked={checked === "bom"}
        onChange={() => onRadioButtonChange("bom")}
      />
      <RadioButton
        label="Ótimo"
        value="otimo"
        checked={checked === "otimo"}
        onChange={() => onRadioButtonChange("otimo")}
      />
      <RadioButton
        label="Excelente"
        value="excelente"
        checked={checked === "excelente"}
        onChange={() => onRadioButtonChange("excelente")}
      />
    </div>
  );
};

export default RadioButtonContainer;
