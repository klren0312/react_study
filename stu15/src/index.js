import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheRouter from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TheRouter />, document.getElementById('root'));
registerServiceWorker();
