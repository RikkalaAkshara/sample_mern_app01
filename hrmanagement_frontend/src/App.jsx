import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/login"
import Register from "./pages/Register"

import HrHome from "./pages/HrHome"
import EmpHome from "./pages/EmpHome"
import AdminHome from "./pages/AdminHome"

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/HrHome" element={<HrHome></HrHome>}></Route>
        <Route path="/EmpHome" element={<EmpHome></EmpHome>}></Route>
        <Route path="/AdminHome" element={<AdminHome></AdminHome>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
    </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
