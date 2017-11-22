import React from 'react'
import {render,ReactDOM} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(todoApp)
ReactDOM.render(
  <Provider store={store}>
    <App />  
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
