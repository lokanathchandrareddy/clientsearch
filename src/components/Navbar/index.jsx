import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles.css'

export default function Navbar(props) {
  return <div>
    <Button color="secondary">
      <NavLink exact to="/"> <Typography variant="title" color="inherit">
        Home
        </Typography></NavLink>
    </Button>
    <Button color="white">
    <NavLink to="/client"><Typography variant="title" color="inherit">
        Client list
        </Typography></NavLink>
    </Button>
  </div>
}
