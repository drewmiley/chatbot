import React from 'react';
import {connect} from 'react-redux';

import * as config from '../config';

import * as actionCreators from '../actions/chat';

import MessageHistory from '../components/MessageHistory';
import PersonalInfo from '../components/PersonalInfo';
import TypingInfo from '../components/TypingInfo';
import UserMessageInput from '../components/UserMessageInput';

export default class App extends React.Component {
    componentDidMount() {
        if (config.moodFeed) {
            config.moodFeed(this.props.setMood);
        }
    }
    render() {
        return <div>
            <section className="chatbot-app-container">
                <PersonalInfo mood={this.props.mood} />
                <UserMessageInput {...this.props} />
                <MessageHistory messageHistory={this.props.messageHistory} />
                <TypingInfo
                    messageHistory={this.props.messageHistory}
                    typingInfo={this.props.typingInfo}
                    {...this.props} />
            </section>
        </div>
    }
};

actionCreators.messageSelector(config.messageSelector);
actionCreators.waitTime(config.waitTime);
actionCreators.typeTime(config.typeTime);

function mapStateToProps(state) {
    return {
        messageHistory: state.get('messageHistory'),
        mood: state.get('mood'),
        typingInfo: state.get('typingInfo')
    };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);