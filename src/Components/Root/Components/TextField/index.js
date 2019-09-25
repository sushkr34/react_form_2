import React from "react";

const TextField = ({ label, name, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
    />
  </div>
);

export default TextField;