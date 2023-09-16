import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing'
import Navbar from './Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Routing />
  </React.StrictMode>,
)
