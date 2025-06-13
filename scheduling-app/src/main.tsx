import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navigation from './Navigation.tsx'
import "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
    <App />
  </StrictMode>,
)
