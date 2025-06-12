import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home"
import Navbar from "./components/Navbar"
import { Livewire } from "./pages/Livewire"
import { Synergy } from "./pages/Synergy"

function App() {
 

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/lw" element={<Livewire />} > </Route>
      <Route path="/sy" element={<Synergy />}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
