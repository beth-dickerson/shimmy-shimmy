import React, { Component } from 'react';
import VenuesContainer from '../components/VenuesContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="Home">
        <h2>Venues</h2>
        <VenuesContainer />
      </div>
    );
  }
}

export default Home;
