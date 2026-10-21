import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time by scripts/prerender.js to bake the page into static HTML for crawlers.
export const render = () =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
