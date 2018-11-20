import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const renderProfile = (props) => {
    return <div>
        <Card >
            <CardActionArea>
                <div><img src={props.profile.avatar} alt="avatar" /></div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.profile.name}
                    </Typography>
                    <Typography component="p">
                        {props.profile.title}  
                    </Typography>
                    <div>
                    <Typography component="p">
                        <SvgIcon>
                            <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                        </SvgIcon>
                        {props.profile.quote}
                        <SvgIcon>
                            <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                        </SvgIcon>
                    </Typography> 
                    </div>
                    <Typography component="p">
                        I am From {props.profile.nationality}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        {/* <div><img src={props.profile.avatar} /></div>

        <div>Name: {props.profile.name}</div>
        <h1> Title: {props.profile.title} </h1>
        <h1> Quote: {props.profile.quote} </h1>
        <h1> Nationality: {props.profile.nationality} </h1> */}
    </div>
}

const ClientDetail = (props) => (
    props.profile ? renderProfile(props) : <div>{props.match.params.id}</div>
);

function mapStateToProps(state, ownProps) {
    return {
        profile: state.client.clients.find((client) => { return client.id === parseInt(ownProps.match.params.id) })
    }
}


export default withRouter(connect(mapStateToProps)(ClientDetail));
