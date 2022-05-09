import React,{useEffect} from 'react';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './pages/LandingPage';
import { Route,Routes } from 'react-router-dom';
import Company from './pages/Company';
import NotFound from './pages/NotFound';
import Contactus from './pages/Contactus';
import Terms from './pages/Terms';


function App() {

  return (
    <>
      <Navigation/>
        <Routes>
          <Route path='/' element={<LandingPage/>} exact></Route>
          <Route path='/aboutus' element={<Company/>} exact></Route>
          <Route path='/contact' element={<Contactus/>} exact></Route>
          <Route path='/term' element={<Terms/>} exact></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
