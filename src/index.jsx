import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App />, document.getElementById('root'));

render(<App name="Jo" age={2} />, document.getElementById('root'));
