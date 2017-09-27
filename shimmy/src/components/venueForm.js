import React, { Component } from 'react'
import axios from 'axios'

class VenueForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.venue.name,
      address: this.props.venue.address
    }
  }

  handleInput = (event) => {
    this.props.resetNotification()
    this.setState({[event.target.name]: event.target.value})
  }

  handleBlur = () => {
  const venue = {
    name: this.state.name,
    address: this.state.address
  }

  axios.put(
    `http://localhost:3001/api/v1/venues/${this.props.venue.id}`,
    {
      venue: venue
    })
  .then(response => {
    console.log(response)
    this.props.updateVenue(response.data)
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="name" placeholder='Enter a Name' value={this.state.name} onChange={this.handleInput} ref={this.props.titleRef} />
          <textarea className='input' name="address"
            placeholder='Write Address Here' value={this.state.address} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}

export default VenueForm
