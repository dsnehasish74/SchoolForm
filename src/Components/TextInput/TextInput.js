import { useState } from "react";
const TextInput = ({
  lable,
  type,
  value,
  setValue,
  isRequired,
  placeholder,
}) => {
  return (
    <div>
      <label for="exampleFormControlInput1" class="form-label">
        {lable}
        {isRequired && (
          <span style={{ marginLeft: "8px", color: "red" }}>*</span>
        )}
      </label>
      <input
        type={type}
        class="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default TextInput;
