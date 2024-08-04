import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'
import Shop from './content/Shop' 
import Helps from './Helps'
import Kitchen from './Kitchen'
import Travel from './Travel'
import Beauty from './Beauty'
import Furniture from './Furniture'
import Electronic from './Electronic'
import Setting from './Orders'
import Login from './content/Login'
import Signin from './content/Signin'
import About from './About'
import Fashin1 from './Fashin1';
import Profile from './Profile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Aboutus' element={<About/>}/>
        <Route path='/Help' element={<Helps/>}/>
        <Route path='/Kitchen' element={<Kitchen/>}/>
        <Route path='/Fashion' element={<Fashin1/>}/>
        <Route path='/Travel' element={<Travel/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/Furniture' element={<Furniture/>}/>
        <Route path='/Electronic' element={<Electronic/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>

 </>
  
  );
}

export default App;