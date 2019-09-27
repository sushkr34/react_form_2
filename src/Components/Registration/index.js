import React from "react";
import Flexi from "../Components/Flexi";
import hoc from "../Components/HocComponent";
import flexConfigFoRegistration from './regConfig'
class Registration extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc(flexConfigFoRegistration)(Registration);
