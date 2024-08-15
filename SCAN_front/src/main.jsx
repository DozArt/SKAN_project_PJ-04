import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Store from './store/store.jsx'

const store = new Store();

export const Context = createContext({
  store,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/SKAN_project_PJ-04">
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
