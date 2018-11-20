import React from 'react';
import { Router,Route, NavLink,Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import ClientDetail from '../ClientDetail';

import TextField from '@material-ui/core/TextField';


class ClientList extends React.Component {
    state = {
        filter: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filter = (profiles) => {
        return profiles.filter(profile => {
            const keys = Object.keys(profile)
            const matches = keys.filter(_key => {
                const key = profile[_key] && profile[_key].toString().toLowerCase()
                return key && key.indexOf(this.state.filter.toLowerCase()) > -1
            })
            return matches.length > 0
        })
    }
    
    render() {
        return (
            <div>
                <TextField
                    className={{}}
                    value={this.state.filter}
                    onChange={this.handleChange}
                    margin="normal"
                    placeholder="Type to filter clients"
                    name="filter"
                />
                
                <List>
                    {
                        this.filter(this.props.data).map((profile) =>
                            <Link to={`/client/${profile.id}`} key={profile.id} >
                                <ListItem onClick = {() => this.props.selectClient(profile.id)}>
                                    
                                    <span dangerouslySetInnerHTML={{ __html: profile.name }} />
                                </ListItem>
                        </Link>)
                    }
                </List>
                <ClientDetail />
            </div>

        );
    } 
}

export default ClientList;
