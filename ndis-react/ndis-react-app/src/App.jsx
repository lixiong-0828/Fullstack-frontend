
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login'
import NdisService from './components/NdisService'


const App = () =>{

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LoginPage/>} />
        <Route path='/login'  element={<LoginPage/>} />    
        <Route path='/ndis-service'  element={<NdisService/>} />
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
