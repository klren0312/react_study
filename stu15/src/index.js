import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Father from './Father';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Father />, document.getElementById('root'));
registerServiceWorker();
