import React from 'react';

const Header = props  => {

    return (
        <header>
            <h1>Chat App</h1>
            { 
                props.isLogin ?
                (<div className="options">
                    <span className="username">{props.userName}</span>
                    <button className="option-button" onClick={props.onLogout}>Logout</button>
                </div>) : null
            }
        </header>
    )
}

export default Header;