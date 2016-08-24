import React from 'react';

export default class typingState extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.typingState !== nextProps.typingState;
        };
    }
    componentDidMount() {
        if (this.props.typingState.get('running')) {        
            if (this.props.typingState.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingState.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingState.get('waitTime'));
            }
        }
    }
    componentDidUpdate() {
        if (this.props.typingState.get('running')) {        
            if (this.props.typingState.get('typing')) {
                setTimeout(this.props.drewSendsMessage, this.props.typingState.get('typeTime'), this.props.messageHistory);
            } else {
                setTimeout(this.props.drewStartsTyping, this.props.typingState.get('waitTime'));
            }
        }
    }
    render() {
        if (this.props.typingState.get('typing')) {        
            return <div className='chatbot-typing-info'>
                <label>DREW is typing a message...</label>
            </div>
        } else {
            return <div className='chatbot-typing-info'></div>
        }
    }
};