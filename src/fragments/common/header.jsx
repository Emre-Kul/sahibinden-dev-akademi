import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <span>
        "Hello From Header!"
      </span>
    );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
