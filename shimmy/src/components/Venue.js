import React, { Component } from 'react';

class Venue extends Component {

  handleClick = () => {
    this.props.onClick(this.props.venue.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.venue.id)
  }

  render () {
    return (
      <div className="tile">
        <span className="deleteButton"  onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.venue.name}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.venue.address}
        </p>
      </div>
    )
  }
}

export default Venue;
