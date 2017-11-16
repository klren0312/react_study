import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Health from './Health';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Health name={"test"} />, document.getElementById('root'));
registerServiceWorker();
