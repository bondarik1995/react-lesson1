import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

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

const loadingTypes = {
  spinner: "spinner",
  loading: "circle-o-notch",
  refresh: "refresh"
}

const Button = ({text, kind, borderRadius = 0, icon, loadingType, onClick}) => (
  <button className={"btn " + kind} style={{borderRadius: borderRadius}} onClick={onClick}>
    {icon ? <i class={"fa fa-" + icon}></i> : ""}
    {loadingTypes[loadingType] ? <i class={"fa fa-" + loadingTypes[loadingType] + " fa-spin"}></i> : ""}
    {text}
  </button>
);

const btns = (
  <div>
    <Button 
      text="Success" 
      kind="success" 
      borderRadius={5} 
      icon="home" 
      loadingType="spinner"
    />
    <Button 
      text="Info" 
      kind="info"
      loadingType="loading"
    />
    <Button 
      text="Warning" 
      kind="warning" 
      borderRadius={50} 
      icon="trash"
      loadingType="refresh"
    />
    <Button 
      text="Danger" 
      kind="danger" 
      borderRadius={10} 
      icon="close" 
    />
    <Button 
      text="Default" 
      kind="default" 
      borderRadius={30} 
      icon="folder" 
    />
  </div>
);

render(<App />, document.getElementById('root'));
