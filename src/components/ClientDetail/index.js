import React from 'react';

const ClientDetail = (props) => (<div>
    
    <h1> {props.clientProfile.name} </h1>
    <h1> {props.clientProfile.title} </h1>
    <h1> {props.clientProfile.quote} </h1>
    <h1> {props.clientProfile.nationality} </h1>
    <div>
        <img src={props.clientProfile.avatar} alt=" avatar" />

    </div>
</div>

);

export default ClientDetail;