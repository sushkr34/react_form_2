import React from "react";
// const Header = ({ label, horizontalAlign, verticalAlign }) => {
  // console.log(LabelName,"label ")
  const Header = (props) => {
  return (
    <div>
      <label
        // style={{
        //   display: { horizontalAlign },
        //   verticalAlign: { verticalAlign }
        // }}
      >{props.label}
      </label>
    </div>

  )
}
export default Header;
