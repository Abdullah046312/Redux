import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store.js";
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <App />
 </Provider>
  
)
