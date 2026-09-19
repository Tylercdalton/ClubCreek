import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GolfGetaway from './GolfGetaway.jsx'

const shell = document.getElementById('seo-shell')
if (shell) shell.hidden = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GolfGetaway />
  </StrictMode>,
)
