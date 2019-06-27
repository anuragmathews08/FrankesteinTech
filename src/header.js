import React from 'react';
import Login from './login-form';

class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>Frankestein Tech</h1>
                <p>Best place to learn the latest tech</p>
                <Login />
            </div>
        );
    }
}

export default Header;