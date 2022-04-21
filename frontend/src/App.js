import './App.css';
import Nav from './components/Nav';
import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Login';
import Coaching from './components/Coaching';
import Courses from './components/Courses';
import Details from './components/Details';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Details4 from './components/Details4';
import Details5 from './components/Details5';
import Details6 from './components/Details6';
import Details7 from './components/Details7';
import Details8 from './components/Details8';
import Details9 from './components/Details9';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/offered" element={<Courses/>}></Route>
        <Route path="/course" element={<h1>{<Details/>}</h1>}></Route>
        <Route path="/coaching" element={<Coaching/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/course2" element={<h1>{<Details2/>}</h1>}></Route>
        <Route path="/course3" element={<h1>{<Details3/>}</h1>}></Route>
        <Route path="/course4" element={<h1>{<Details4/>}</h1>}></Route>
        <Route path="/course5" element={<h1>{<Details5/>}</h1>}></Route>
        <Route path="/course6" element={<h1>{<Details6/>}</h1>}></Route>
        <Route path="/course7" element={<h1>{<Details7/>}</h1>}></Route>
        <Route path="/course8" element={<h1>{<Details8/>}</h1>}></Route>
        <Route path="/course9" element={<h1>{<Details9/>}</h1>}></Route>
      </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
