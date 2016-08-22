import React from 'react';

export default class MoodLabel extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <div className='chatbot-mood-label'>
            <label>Drew is {this.props.mood}</label>
        </div>
    }
};