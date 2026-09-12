import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Graduation from './Graduation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Graduation />
  </StrictMode>,
)
