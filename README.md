# Chatbot

A simple react-redux chatbot

## Running the app

The app uses webpack-dev-server to aid development. Technologies used include babel, immutable for data storage, and mocha and chai for unit testing.

To start the development server with hot reloading enabled, simply run

```
webpack-dev-server
```

To run the set of unit tests, simply run

```
npm test
```

## Deploying the app

To deploy the app to gh-pages, there are a couple of steps to follow.

1. Run `webpack` command. This will create a `bundle.js` and `bundle.js.map` file in the dist folder.
2. Delete everything except dist folder.
3. Empty contents of dist folder to root directory.
4. Commit and push to gh-pages.

## Folder structure
    
    +-- actions
    |   +-- chat.js
    +-- components
    |   +-- Bio.jsx
    |   +-- MessageHistory.jsx
    |   +-- MessageView.jsx
    |   +-- MoodLabel.jsx
    |   +-- PersonalInfo.jsx
    |   +-- TypingInfo.jsx
    |   +-- UserMessageInput.jsx
    +-- constants
    |   +-- actions.js
    |   +-- bio.js
    |   +-- conjunctions.js
    |   +-- messages.js
    |   +-- moods.js
    |   +-- pictures.js
    +-- containers
    |   +-- App.jsx
    +-- logic
    |   +-- RandomBioGenerator.js
    |   +-- RandomMessageSelector.js
    |   +-- RandomMoodFeed.js
    |   +-- RandomPictureLocation.js
    |   +-- RandomTime.js
    +-- reducers
    |   +-- chat.js
    +-- config.js
    +-- index.jsx

## Unit tests

Currently, there are tests on each of the files within the components, logic, and reducers folders. The relevant file can be found in the analogous point within the `test` folder. All test files are suffixed with `_spec`

## Custom implementation

Defaulted implementations are held in the logic folder. Currently, it utilises a fairly idiosyncratic algorithm. Bio, conjunction, mood, and message statements, and picture locations are found in the constants folder.