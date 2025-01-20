import './App.css';
import Canvas from './Canvas.js'
import Task from './task.js'
import Staticcrop from './Static.js'
import Statictag from './Statictag.js'
import DynamicCrop from './DynamicCrop.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Konvo from './Konvo.js';
import DynamicValues from './DynamicValues.js';

import Main from './main.js';
import ImageCropper from './ImageCropper.js';



const App = () => {
  return (
//     <div className="app">
// {/*      <h1>StaticCrop</h1>
//       <Statictag /> */} 
//       {/*  <h1 style={{textAlign:"center"}}>Canvas Crop</h1>
//       <DynamicCrop/>  */}
//      {/*  <h1>Konvo</h1>
//       <Konvo/> */}
//      {/*  <h1>Coordinate Values</h1>
//       <DynamicValues/> */}
//       <Main/>
//     </div>
<Router>
<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/dynamic-crop" element={<DynamicCrop />} />
  <Route path="/ai-crop" element={<ImageCropper/>}/>

</Routes>
</Router>
  );
};

export default App;








