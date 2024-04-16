import React, { useState } from 'react';
import './App.css';
import App2 from './App2';
import Body from './Bodyparts';
import Equi from './Equipment';
import Targ from './Target';
import { Exercise as Exer } from './Exercise';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {

  const [y, z] = useState("shoulders");
  const [i, j] = useState(10);


  const Data = (value) => {
    z(value);
  }


  const Data1=(value)=>{
    j(value);
  }


  



  return (
    <div>


      <BrowserRouter>
        <Navbar part={Data}  lim={Data1}/>
        <Routes>

          <Route path='/'       element={<App2 h={y}  n={i} />}> </Route>
          <Route path='/b-list' element={<Body />}>  </Route>
          <Route path='/e-list' element={<Equi />}>  </Route>
          <Route path='/t-list' element={<Targ />}>  </Route>
          <Route path='/exer'   element={<Exer  r={i} />}>  </Route>


        </Routes>
      </BrowserRouter>






    </div>
  );
}

export default App;
