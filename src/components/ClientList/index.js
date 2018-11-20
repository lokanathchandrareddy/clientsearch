import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ClientDetail from "../ClientDetail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";

class ClientList extends React.Component {
    state = {
        filter: "",
        secondary: false //for secondary text that is title
    };
    //to keep track of search input
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    //filter function - it filters all the values in the data, using object.keys method
    filter = profiles => {
        return profiles.filter(profile => {
            const keys = Object.keys(profile);
            const matches = keys.filter(_key => {
                const key = profile[_key] && profile[_key].toString().toLowerCase();
                return key && key.indexOf(this.state.filter.toLowerCase()) > -1;
            });
            return matches.length > 0;
        });
    };

    render() {
        const { secondary } = this.state;
        return (
            <Grid container>
                <Grid item xs={3}>
                    <Paper>
                        <Toolbar>
                            <div>
                                <SearchIcon />
                            </div>
                            <TextField
                                className={{}}
                                value={this.state.filter}
                                onChange={this.handleChange}
                                margin="normal"
                                placeholder="Type to filter clients"
                                name="filter"
                            />
                        </Toolbar>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={secondary}
                                    onChange={event =>
                                        this.setState({ secondary: event.target.checked })
                                    }
                                    value="secondary"
                                />
                            }
                            label="Enable Title"
                        />
                        {/* Creating a list of Client List items, having a toggle for Title */}
                        <List>
                            <Divider />
                            {this.filter(this.props.data).map(profile => (
                                <Link to={`/client/${profile.id}`} key={profile.id}>
                                    <ListItem onClick={() => this.props.selectClient(profile.id)}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={profile.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText secondary={secondary ? profile.title : null}>
                                            <span
                                                dangerouslySetInnerHTML={{ __html: profile.name }}
                                            />
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                </Link>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                {/* connect with the Client Detail component when the client list item is clicked */}
                <Grid item xs={9}>
                    <ClientDetail />
                </Grid>
            </Grid>
        );
    }
}

export default ClientList;

