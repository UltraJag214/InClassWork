import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// IMPORTANT: To prepare this project for building along in `./App.js`:
// [1] Comment out this line:
// import App from "./complete/App-17";
// [2] Un-comment this line:
import WrappedApp from "./App";

ReactDOM.render(<WrappedApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
