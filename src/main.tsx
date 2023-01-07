import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './layout'
import { Info } from './components'
import './index.css'

const App = () => (
  <Layout>
    <Info />
  </Layout>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
