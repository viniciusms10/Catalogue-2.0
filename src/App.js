import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/Navbar';
import Contact from './components/Contact';
import Visit from './components/Visit';
import About from './components/About';
import Home from './components/Home';

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
      </div>
  );
}

export default App;
