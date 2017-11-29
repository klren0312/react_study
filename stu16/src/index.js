import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AjaxAntTable from './AjaxAntTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AjaxAntTable />, document.getElementById('root'));
registerServiceWorker();
