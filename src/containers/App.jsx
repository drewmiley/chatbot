import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/chat';

export default class App extends React.Component {
    componentDidMount() {
        console.log('ready for logic');
    }
    render() {
        return <div>
            <section className="chatbot-app-container">
                Hello Drew
            </section>
        </div>
    }
};

function mapStateToProps(state) {
    return {
        messageHistory: state.get('messageHistory'),
        mood: state.get('mood')
    };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);