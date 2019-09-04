import React, { createRef } from 'react';
import { connect } from  'react-redux';

import ChatMessage from './ChatMessage';

import { addMessage, logoutUser } from '../redux/actions';
import Header from './Header';

let CHAT_API = "wss://echo.websocket.org/";

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            received : 0
        };

        this.connection = new WebSocket(CHAT_API);
    }

    componentDidMount() {
        this.messagesEndRef = createRef(null);
        this.scrollToBottom();

        window.addEventListener("beforeunload", function(event) {
            event.returnValue = "Changes that you made may not be saved.";
            event.preventDefault();
        });

        this.connection.onmessage = evt => {
            let message = {
                user: "ChatBot",
                message: evt.data,
                loggedInUser: false
            };

            this.props.sendMessage(message);
            this.setState({
                received : 1
            });
        };

    }

    onMessageChange = (e) => {
        let text = e.target.value;

        this.setState({
            text
        });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.onSend();
        }
      }
    
    onSend = () => {
        let { text } = this.state;

        if (text.length > 0) {
            let message = {
                user: this.props.userName,
                message: text,
                loggedInUser: true
            }; 
        this.props.sendMessage(message);
        this.connection.send(text);

        this.setState({
            text : '',
            received: 0
        });
        }
    }

    onLogout = () => {
        this.props.history.push('/');
        this.props.onLogoutUser();
    }

    scrollToBottom = () => {
        if (this.messagesEndRef.current) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        let { messages } = this.props;

        return (
            <React.Fragment>
                <Header {...this.props} onLogout={this.onLogout}/>
                <div className="chat-page">
                    <div className="chat-messages">
                    {
                        messages.map((message, index) => {
                            return (<ChatMessage key={index} message={message} />);
                        })
                    }
                    <div ref={this.messagesEndRef} />
                    </div>
                    <div className="chat-box">
                        <input className="chat-text" type="text" value={this.state.text} placeholder="Type here.." onKeyPress={this.handleKeyPress} onChange={this.onMessageChange}/>
                        <button className="chat-button" onClick={this.onSend}>Send</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        userName: state.userName,
        isLogin: state.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage(message) {
            dispatch(addMessage(message));
        },
        onLogoutUser() {
            dispatch(logoutUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);