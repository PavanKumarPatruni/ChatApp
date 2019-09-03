import React from 'react';
import { connect } from  'react-redux';

import { loginUser } from '../redux/actions';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: ""
        }
    }

    onLogin = () => {
        this.props.history.push('/chat');
        this.props.loginUser(this.state.userName);
    }

    onUserNameChange = event => {
        this.setState({
            userName: event.target.value
        });
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                    <h1>Login</h1>
                    <input type="email" placeholder="Username" value={this.state.userName} className="text-input" onChange={this.onUserNameChange}/>
                    <input type="password" placeholder="Password" className="text-input"/>
                    <button className="login-button" onClick ={this.onLogin}>Login</button>
                    <div className="login-buttons">
                        <button className="login-button signup-button">Forgot password?</button>
                        <button className="login-button signup-button">Create Account</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser(userName) {
            dispatch(loginUser(userName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);