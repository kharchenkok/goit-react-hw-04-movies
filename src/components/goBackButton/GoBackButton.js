import React, { Component } from 'react';
import Styles from './GoBackButtonStyles.module.css';
import { withRouter } from 'react-router-dom';

class GoBackButton extends Component {
  handleGoBack = () => {
     (this.props.from && this.props.search) ?
      this.props.history.push(`${this.props.from}${this.props.search}`):
    this.props.history.push('/')
  };

  render() {
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
