import React from 'react';
import './App.css';
import './index.css'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Search from './Pages/Search'
import Landing from './Pages/Landing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() { return (
  <Router>
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/Register' element={<Register />} />
     <Route path='/Search' element={<Search />} />
     <Route path='/Landing' element={<Landing />} />
   </Routes>
 </Router>
);
}





export default App;


