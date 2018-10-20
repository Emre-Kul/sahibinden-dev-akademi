import React from "react";
import Header from "../common/header.jsx";
import PropTypes from "prop-types";

import {
  Container
} from 'semantic-ui-react'

import {
  Bar as BarChart
} from 'react-chartjs'

const EXAMPLE_DATA = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const EXAMPLE_OPTIONS = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
};

class AllStats extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        <Container style={{ marginTop: '7em' }}>
          <BarChart data={EXAMPLE_DATA} options={EXAMPLE_OPTIONS} width="600" height="250"/>
        </Container>
      </React.Fragment>
    );
  }

}

AllStats.propTypes = {
  stats: PropTypes.array
};

AllStats.defaultProps = {
  stats: []
};

export default AllStats;
