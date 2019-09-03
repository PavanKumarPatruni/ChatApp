import React from 'react';

class ChatMessage extends React.Component {

    render() {
        let { message } = this.props;

        return (
            <div className={ message.loggedInUser ? 'message-box message-box-right' : 'message-box message-box-left' }>
                { message.loggedInUser ? null : <div className="user-name">{message.user}</div> }
                <div className={ message.loggedInUser ? 'chat-message chat-message-right' : 'chat-message chat-message-left' }>{message.message}</div>
            </div>
        )
    };
}

export default ChatMessage;