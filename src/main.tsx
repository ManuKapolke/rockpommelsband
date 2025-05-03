import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './custom-css-reset.less'
import './global-styles.less'
import { App } from './components/App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
