import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Collegepage from './page/Collegepage.jsx'
import Navbarpage from './page/Navbarpage.jsx'
 


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Collegepage/>

  
  </StrictMode>,
)
