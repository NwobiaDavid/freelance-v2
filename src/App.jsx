import Navbar from './NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
     <Navbar />
 
      <div className='h-[80%]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>

    </>
     
  );
};

export default App;
