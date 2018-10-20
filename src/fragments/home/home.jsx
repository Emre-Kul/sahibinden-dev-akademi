import React from "react";
import PropTypes from "prop-types";

import Header from "../common/header.jsx";
import Footer from "../common/footer.jsx";

import {
  Container,
  Label
} from 'semantic-ui-react'

class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
          <span>
            "Hello World!"
          </span>
        <Footer/>
      </React.Fragment>
    );
  }

}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
