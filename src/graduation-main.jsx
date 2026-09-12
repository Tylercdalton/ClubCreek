import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GraduationPage from './GraduationPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GraduationPage />
  </StrictMode>,
)
