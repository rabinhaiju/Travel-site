import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Journey from './Components/Journey';
import Lifemoment from './Components/Lifemoment';
import Departure from './Components/Departure';
import Contact from './Components/Contact';
import DestinationDetail from './Components/DestinationDetail';
import Nepal from './Components/Nepal';
import India from './Components/India';
import China from './Components/China';
import Bhutan from './Components/Bhutan';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/lifemoment' element={<Lifemoment />} />
        <Route path='/departure' element={<Departure />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:id' element={<DestinationDetail />} />
        <Route path='/nepal' element={<Nepal/>} />
        <Route path='/india' element={<India/>} />
        <Route path='/china' element={<China/>} />
        <Route path='/bhutan' element={<Bhutan/>} />
      </Routes>
    </div>
  );
}

export default App;
