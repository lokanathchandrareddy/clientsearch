import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

function renderProfile(props) {
    return <div>
        <div><img src={props.profile.avatar} /></div>

        <div>Name: {props.profile.name}</div>
        <h1> Title: {props.profile.title} </h1>
        <h1> Quote: {props.profile.quote} </h1>
        <h1> Nationality: {props.profile.nationality} </h1>
    </div>
}

const ClientDetail = (props) => (
    props.profile ? renderProfile(props) : <div>{ props.match.params.id }</div>
);

function mapStateToProps(state, ownProps) {
    return {
        profile: state.client.clients.find((client) => { return client.id === parseInt(ownProps.match.params.id) }) 
    }
}


export default withRouter(connect(mapStateToProps)(ClientDetail));
