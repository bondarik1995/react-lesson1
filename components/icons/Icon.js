import React from 'react';

export class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  render() {
    const {name} = this.state;

    return (
      <i class={"fa fa-" + name}></i>
    );
  }
}
