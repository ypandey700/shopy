import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './component/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './Utils/Context.jsx'

createRoot(document.getElementById('root')).render(
<Context>
  <BrowserRouter>
   
      <App />
   
  </BrowserRouter>
 
</Context>

)
