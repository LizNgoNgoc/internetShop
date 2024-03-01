import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>

);


