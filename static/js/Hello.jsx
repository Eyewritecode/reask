import React from "react";
import {Button} from "react-bootstrap";
var $ = require("jquery");

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "Ohayo " + this.props.name};
    this.getPythonHello = this.getPythonHello.bind(this);
  }

  personaliseGreeting(greeting){
    this.setState({greeting: greeting + " " + this.props.name + "!"});
  }

  getPythonHello(){
    $.get(window.location.href + "hello", (data) => {
      console.log(data);
      this.personaliseGreeting(data);
    });
  }
  render() {
    return(
      <div>
        <h1>{this.state.greeting}</h1>
        <hr/>
        <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
          Say Hello!
        </Button>
      </div>
    );
  }
}
