import * as React from 'react';
import "../Admin/Admin.css";

class Input extends React.Component {
  
  render() {
    return (
      <div className="mt3">
        <input
          className="pa2 input-reset ba bg-transparent"
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;