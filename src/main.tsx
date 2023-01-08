import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './layout'
import { Favourites, Hero, Info, Location, Photos } from './components'
import './index.css'

const App = () => {
  React.useEffect(() => {
    console.log(`
,-.___,-.
\\_/_ _\\_/
  )O_O(
 { (_) }
  '-^-' 
Astra's paw-sonal website
  `)
  }, [])

  return (
    <Layout>
      <Hero />
      <Info />
      <Location />
      <Photos />
      <Favourites />
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
