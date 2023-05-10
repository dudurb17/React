import React, { Component } from 'react';
import './style.css';

export class Input extends Component {
  render() {
    return (
      <div class="wrapper">
        <span>{this.props.label}</span>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          {...this.props}
        />
      </div>
    );
  }
}
