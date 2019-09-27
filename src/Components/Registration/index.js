import React from "react";
import Flexi from "../Components/Flexi";
import hoc from "../Components/HocComponent";
class Registration extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config.flexConfigForRegistration}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc()(Registration);
