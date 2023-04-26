import React from 'react';
import { Price } from './components/Price/Price';
import { ManageUser } from './components/ManageUser/ManageUser';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ManageUser/>}/>
      <Route path='/price' element={<Price/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
