import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Translator from './pages/Translator';
import Learn from './pages/Learn';
import G2 from './pages/G2';

function App() {

  return (
    <>
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Translator" element={<Translator/>} />
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/G2' element={<G2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
