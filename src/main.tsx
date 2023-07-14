import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={() => <Layout Comp={Home}/>}/>
        <Route path='/login' Component={() => <Layout Comp={Login}/>}/>
        <Route path='/register' Component={() => <Layout Comp={Register}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
