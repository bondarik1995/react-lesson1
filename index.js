import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from './components/button';
import { Icon, IconLoading } from './components/icons';

let loadingTypes = {
  spinner: "spinner",
  loading: "circle-o-notch",
  refresh: "refresh",
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState({count: this.state.count + 1});
  }

  minus() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <Button text="Plus" kind="info" onClick={this.plus} />
        <Button text="Minus" kind="danger" onClick={this.minus} />
      </div>
    );
  }
}

const btns = (
  <div>
    <Button 
      kind="success" 
      borderRadius={5}
    >
      <Icon name="home" />
      // <IconLoading name={loadingTypes["spinner"]} />
      Success
    </Button>
    <Button 
      kind="info"
    >
      // <IconLoading name={loadingTypes["loading"]} />
      Info
    </Button>
    <Button 
      kind="warning" 
      borderRadius={50} 
      icon="trash"
      loadingType="refresh"
    >
      Warning
    </Button>
    <Button 
      kind="danger" 
      borderRadius={10} 
      icon="close" 
    >
      Danger
    </Button>
    <Button 
      kind="default" 
      borderRadius={30} 
      icon="folder" 
    >
      Default
    </Button>
  </div>
);

render(btns, document.getElementById('root'));
