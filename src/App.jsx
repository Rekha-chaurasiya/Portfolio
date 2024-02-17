import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About';
import Themes from './component/Themes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Themes/>
    <Routes>
    <Route  index element={<Home />} />
    <Route path='about' element ={<About />} />
    <Route path='contact' element={<Contact />} />     
    <Route path='portfolio' element= {<Portfolio />} />   
    <Route path='navbar' element={<About />} />                             
    </Routes>
    </BrowserRouter> 
    
    </>
  )
}

export default App
