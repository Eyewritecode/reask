import React from "react";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "Ohayo" + this.props.name};
    this.getPythonHello = this.getPythonHello.bind(this);
  }

  personaliseGreeting(greeting){
    this.setState({greeting: greeting + " " + this.props.name + "!"});
  }
}
