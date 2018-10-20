import React from "react";
import PropTypes from "prop-types";

import Header from "../common/header.jsx";
import Footer from "../common/footer.jsx";

import {
  Container
} from 'semantic-ui-react'

class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
          <Container style={{ marginTop: '7em' }}>
            "Hello World!"
          </Container>
        <Footer/>
      </React.Fragment>
    );
  }

}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
