import React from 'react';

export default class MessageView extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <li className='chatbot-message-view'>
            <label>{this.props.drewSaid ? 'DREW' : 'YOU'} : {this.props.text}</label>
        </li>
    }
};