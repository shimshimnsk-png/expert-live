import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LeadModalProvider } from './context/LeadModalContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeadModalProvider>
      <App />
    </LeadModalProvider>
  </React.StrictMode>,
)
