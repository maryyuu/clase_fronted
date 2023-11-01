import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import navegador from '../../Navegador'

let AppRutas= () => {
  let rutas = useRoutes([
    { path: '/imgur', element: <Imgur /> },
    { path: '/newpost', element: <Newpost /> },
    { path:'barra', element:<Barra/>}
  
  ]
  )

  return (
    <div>Hola desde return app rutas</div>
  )
}
function app() { 
  return (

      <Layout>
       <navegador />
      </Layout>
    
  )
}

export default App
