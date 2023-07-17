import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import { UserProvider } from './components/UserContext'
import Vehicles from './components/Vehicles'
import Clients from './components/Clients'
import Client from './components/Client'
import Vehicle from './components/Vehicle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={() => <Layout Comp={Home}/>}/>
          <Route path='/login' Component={() => <Layout Comp={Login}/>}/>
          <Route path='/register' Component={() => <Layout Comp={Register}/>}/>
          <Route path='/vehicles' Component={() => <Layout Comp={Vehicles}/>}/>
          <Route path='/vehicles/:id' Component={() => <Layout Comp={Vehicle}/>}/>
          <Route path='/clients' Component={() => <Layout Comp={Clients}/>}/>
          <Route path='/clients/:id' Component={() => <Layout Comp={Client}/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>

  </React.StrictMode>,
)
