import React from 'react';

import { Icon, IconLoading } from '../icons';
import './style.css';

const loadingTypes = {
  spinner: "spinner",
  loading: "circle-o-notch",
  refresh: "refresh"
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      kind: props.kind,
      borderRadius: props.borderRadius,
      children: props.children
    };
  }

  render() {
    const { kind, borderRadius, children } = this.state;
    
    return (
      <button className={"btn " + kind} style={{ borderRadius: borderRadius }}>
        {children}
      </button>
    );
  }
}
