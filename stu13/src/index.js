import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimeSet from './TimeSet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimeSet />, document.getElementById('root'));
registerServiceWorker();
