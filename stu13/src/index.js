import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RequestStu from './RequestStu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RequestStu />, document.getElementById('root'));
registerServiceWorker();
