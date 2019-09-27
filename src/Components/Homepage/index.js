import React from 'react';
import Flexi from "../Components/Flexi"
import hoc from "../Components/HocComponent";
import flexConfigForHome from './homeConfig'
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.config}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc(flexConfigForHome)(HomePage);
