import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <span>
        "Hello From Footer!"
      </span>
    );
  }

}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
