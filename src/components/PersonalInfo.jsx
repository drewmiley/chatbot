import React from 'react';

import MoodLabel from './MoodLabel';

export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.mood !== nextProps.mood;
        };
    }
    render() {
        return <div className="chatbot-personal-info">
            <MoodLabel mood={this.props.mood} />
            <div id="chatbot-picture">
                {/*<img src="./pic.JPG"/>*/}
            </div>
        </div>
    }
};