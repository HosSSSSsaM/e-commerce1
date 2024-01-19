import React from 'react'
import ReactDOM from 'react-dom/client'
import  "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap/dist/js/bootstrap.min.js"
import App from './App.jsx'
import { store } from './componates/r-toolkit/Store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
)
