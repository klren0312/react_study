import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateExample from './StateExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StateExample />, document.getElementById('root'));
registerServiceWorker();
