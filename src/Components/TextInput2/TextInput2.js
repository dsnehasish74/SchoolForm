import { useState } from "react";
const TextInput2 = ({
  lable,
  type,
  value,
  setValue,
  isRequired,
  placeholder,
}) => {
  return (
    <div>
      <label
        for="exampleFormControlInput1"
        class="form-label"
        style={{ fontWeight: "bold" }}
      >
        {lable}
        {isRequired && (
          <span style={{ marginLeft: "8px", color: "red" }}>*</span>
        )}{" "}
        :
      </label>
      <lable class="form-label" style={{ marginLeft: "10px" }}>
        {value}
      </lable>
    </div>
  );
};
export default TextInput2;
