import React from 'react';

export default class UserMessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
        this.state = { input: ''};
    }
    handleInput(e) {
        if (e.keyCode === 13) {
            this.sendMessage();
        } else {
            this.setState({ input: e.target.value + String.fromCharCode(e.keyCode) });
        }
    }
    sendMessage() {
        this.props.userSendsMessage(this.state.input);
        this.setState({ input: '' });
    }
    render() {
        return <div className='chatbot-user-message-input'>
            <input className='chatbot-user-message-input-box' type='text' value={this.state.input} onKeyUp={(e) => this.handleInput(e)} placeholder='Send Drew a message!'/>
            <button className='chatbot-user-message-input-button' type='button' onClick={(e) => this.sendMessage()}>Send</button>
        </div>
    }
};