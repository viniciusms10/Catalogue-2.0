import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/Navbar';
import Contact from './components/Contact';
import Visit from './components/Visit';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
      <div> 
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Visit' element={<Visit/>}/>
                    <Route path='/About' element={<About/>}/>
                </Routes>
            </Router>

            <Footer/>

      </div>
  );
}

export default App;
