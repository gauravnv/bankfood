import React, { Component } from 'react';
import './Foodbank.css';
import Banner from '../Banner/Banner';
import Portalnav from '../Portalnav/Portalnav';

class Foodbank extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Portalnav />
      </div>
    );
  }
}

export default Foodbank;
