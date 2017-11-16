import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RequestDemo from './RequestDemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RequestDemo />, document.getElementById('root'));
registerServiceWorker();
