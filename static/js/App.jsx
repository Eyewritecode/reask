import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import BackgroundImage from "../images/torii.jpg";

require("../css/layout.css");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addBackgroundImage = this.addBackgroundImage.bind(this);
  }
  addBackgroundImage() {
    let backgroundImage = new Image();
    backgroundImage.src = BackgroundImage;
  }

  render(){
    return(
      <PageHeader>
        <div className='header-contents'>
          { this.addBackgroundImage() }
          <Hello name="T'Challa" />
        </div>
      </PageHeader>
    );
  }
}
