import React from 'react';

export class IconLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  render() {
    const {name} = this.state;

    return (
      <i className={"fa fa-" + name + " fa-spin"}></i>
    );
  }
}
