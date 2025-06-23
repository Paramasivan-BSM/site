import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home"
import Navbar from "./components/Navbar"
import { Livewire } from "./pages/Livewire"
import { Synergy } from "./pages/Synergy"
import Footer from "./Footer"
import Carousel from "./components/Carousel"
import Courses from "./components/Courses"

function App() {
 

  return (
    <BrowserRouter>
    <Navbar />
    <Carousel />
    <Courses/>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/lw" element={<Livewire />} > </Route>
      <Route path="/sy" element={<Synergy />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App
