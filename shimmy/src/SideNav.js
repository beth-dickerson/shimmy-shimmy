import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem';


const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/users', text: 'Users' },
  { isExact: false, linkTo: '/venues', text: 'Venues' },
  { isExact: false, linkTo: '/sign-in', text: 'Sign In' },
  { isExact: false, linkTo: '/sign-out', text: 'Sign Out' },
  { isExact: false, linkTo: '/sign-up', text: 'Sign Up' },
  {
    isExact: false,
    linkTo: '/submit-a-venue-form',
    text: 'Submit a Venue Form' }
]

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <ButtonAppBar />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem isExact={link.isExact}  linkTo={link.linkTo} primaryText={link.text} handleClose={this.handleClose} key={i} />
            )
          })}
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
