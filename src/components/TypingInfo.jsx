import React from 'react';

export default class TypingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.typingInfo !== nextProps.typingInfo;
        };
    }
    componentDidMount() {
        if (this.props.typingInfo.get('running')) {        
            if (this.props.typingInfo.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingInfo.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingInfo.get('waitTime'));
            }
        }
    }
    componentDidUpdate() {
        if (this.props.typingInfo.get('running')) {        
            if (this.props.typingInfo.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingInfo.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingInfo.get('waitTime'));
            }
        }
    }
    render() {
        if (this.props.typingInfo.get('typing')) {        
            return <div className='chatbot-typing-info'>
                <label>DREW is typing a message...</label>
            </div>
        } else {
            return <div className='chatbot-typing-info'></div>
        }
    }
};