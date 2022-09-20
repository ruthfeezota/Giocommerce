import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Search from './Pages/Search'
import commProfile from './Pages/commProfile'
import personalProfile from './Pages/personalProfile'




function App() { return (
  <Router>
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/Register' element={<Register />} />
     <Route path='/Search' element={<Search />} />
     <Route path='/commProfile' element={<commProfile />} />
     <Route path='/personalProfile' element={<personalProfile />} />
   </Routes>
 </Router>
);
}export default App;


//class App extends React.Component {
 // render() {
 // return (
     // <Router>
      //  <Navbar />
    //    <Switch>
     //     <Route path='/' exact component={Home} />
      //    <Route path='/Login' exact component={Login} />
      //    <Route path='/Register'  component={Register} />
      //   <Route path='/Search'  component={Search} />
       //   <Route path='/commProfile' component={commProfile} />
      //    <Route path='/personalProfile' component={personalProfile}  />
      //  </Switch>
       // <Footer />
     // </Router>
    
 // );
//}
//}

//export default App;
