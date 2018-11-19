import * as React from 'react';
import "../Admin/Admin.css";

class SubmitButton extends React.Component {
  
  render() {
    return (
      <div className="mt3">
        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          type="button"
          value={this.props.placeholder}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default SubmitButton;