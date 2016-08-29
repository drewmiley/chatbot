import React from 'react';

export default class MoodLabel extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <div className='chatbot-mood-label'>
            <h4><span className='label label-danger'>DREW is {this.props.mood}</span></h4>
        </div>
    }
};