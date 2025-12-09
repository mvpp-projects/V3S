import React from 'react'
import { createRoot } from 'react-dom/client'
import AppExample from './AppExample'
import './styles/index.css'

const el = document.getElementById('root')!
createRoot(el).render(
  <React.StrictMode>
    <AppExample />
  </React.StrictMode>
)
