import React, { Component } from "react";
import Styles from "./GoBackButtonStyles.module.css";
import { withRouter } from "react-router-dom";

class GoBackButton extends Component {
  handleGoBack = () => {
    console.log("button", this.props);
    

    if (this.props.from) {
      console.log("first");
      if (this.props.search) {
        console.log("second");
        this.props.history.push(`${this.props.from}${this.props.search}`);
      }
    } else return this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div className={Styles.buttonWrapper}>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
}

export default withRouter(GoBackButton);