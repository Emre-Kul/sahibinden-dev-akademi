import React from "react";
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

import PropTypes from "prop-types";

class Header extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              Sahibinden-Stats
            </Menu.Item>
          </Container>
        </Menu>
    );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
