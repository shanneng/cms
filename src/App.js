import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Crud/Home';
import Create from "./Crud/Create";
import Update from './Crud/Update';
import View from './Crud/View';

function App () { 
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/create' element= {<Create/>}></Route>
          <Route path='/update/:id' element= {<Update/>}></Route>
          <Route path='/view/:id' element= {<View/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  
}

export default App;
