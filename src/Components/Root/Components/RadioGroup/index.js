import React from "react";
const RadioGroup = (label, type, name, options) =>{
  return(
    <div>
    <label> {label}</label>
    {options.map(option =>{
      return (
        <input name ={name} type ="radio" value ={option.label} /> 
        
      );
    })}
    </div>
  );
};
export default RadioGroup
