import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(<App />, document.getElementById('root'));


