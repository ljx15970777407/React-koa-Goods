import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Provider} from 'react-redux';
import store from './store/index';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes/index';
console.log('//////////////////////////')
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
