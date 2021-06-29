import React from 'react';
import { Redirect } from 'react-router-dom';

export const Protected = (props) => {
    const auth = localStorage.getItem('token');
    return <div> {auth ? <props.cmp /> : <Redirect to="/sign-up" /> }</div>
}