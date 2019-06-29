import React from 'react';

class Header extends React.Component{
    render() {
        return(
                <div className="header">
                    <div className="container">
                        <h1 id="name">Frankestein Tech</h1>
                        <p id="moto">Best place to know about latest tech</p>
                        <p className="dynamic-para">Know about all the latest and most popular tech at one place</p>
                    </div>
                </div>
        );
    }
}

export default Header;