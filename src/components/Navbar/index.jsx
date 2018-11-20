import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

export default function Navbar(props) {
  return <nav>
    <span><NavLink exact to="/">Home</NavLink></span>
    <span><NavLink to="/client">Client list</NavLink></span>
  </nav>
}