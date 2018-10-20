import React from "react";
import PropTypes from "prop-types";

import Header from "../common/header.jsx";
import AllStats from "./all-stats.jsx";

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
            <AllStats />
          </Container>
      </React.Fragment>
    );
  }

}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
