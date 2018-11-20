import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

import "./App.css";

import ClientListConnector from "./connectors/ClientListConnector";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // const { anchorEl } = this.state;
    return (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            {/* Title */}
            <Typography variant="h6" color="inherit" align="right">
              Know Your Clients
            </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        {/* App routing using Switch */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/client" component={ClientListConnector} />
          <Route path="/client/:id" component={ClientListConnector} />
        </Switch>
      </div>
    );
  }
}

export default App;

