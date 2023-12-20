import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()
  let location = useLocation().pathname

useEffect(()=> {
  if (!window.localStorage.getItem('token')) {
    navigate('/Login')
  }
},[location
])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
