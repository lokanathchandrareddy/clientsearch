import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ClientDetail from '../ClientDetail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

class ClientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            currentClientProfile: props.data[0],
        }

    }

    handleChange(clientProfile) {
        console.log("clicked,clientProfile", clientProfile)
        this.setState({ currentClientProfile: clientProfile });
    }
    render() {
        return (
            <Grid container >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Know Your Clients
                        </Typography>
                        <div>
                            <div>
                                <SearchIcon />
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>

                <div>
                    <List>
                        {this.state.data.map((clientProfile, index) =>
                            <ListItem key={index} onClick={() => this.handleChange(clientProfile)}>
                                {clientProfile.name}
                            </ListItem>
                        )}
                    </List>
                    <ClientDetail clientProfile={this.state.currentClientProfile}>
                    </ClientDetail>
                </div>
            </Grid>
        );
    }
}




export default ClientList;

