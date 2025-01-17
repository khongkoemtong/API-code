import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Collegepage from './page/Collegepage.jsx'
 


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Provider >
  <RouterProvider router={router}/>
  </Provider> 
  </StrictMode>,
)
