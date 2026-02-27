import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import RegisterForm from '../src/pages/RegisterForm'
import MenuBar from './pages/MenuBar'
import ShopPage from './pages/ShopPage'
import './App.css'



const App = () => {
  return (
 <>
 <Router>
  <MenuBar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/Shop' element={<ShopPage/>}/>
  </Routes>
 </Router>
 
 </>
  )
}

export default App
