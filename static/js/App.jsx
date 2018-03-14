import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

require("../css/layout.css");

export default class App extends React.Component {
  render(){
    return(
      <PageHeader>
        <div className='header-contents'>
          <Hello name="T'Challa" />
        </div>
      </PageHeader>
    );
  }
}
