import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

ReactDOM.render(){
  return(
    <PageHeader>
      <div className='header-contents'>
        <Hello name="T'Challa" />
      </div>
    </PageHeader>
  );
}
