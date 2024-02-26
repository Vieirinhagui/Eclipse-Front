import React from "react";
import style from "./RadioButton.module.css";

const RadioButton = ({ label, value, checked, onChange }) => {
  const handleLabelClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de subir a página
    if (!checked) {
      onChange && onChange(!checked);
    }
  };

  const handleChange = () => {
    onChange && onChange(!checked);
  };

  return (
    <div className={style.radioButton}>
      <input
        type="radio"
        id={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value} onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
