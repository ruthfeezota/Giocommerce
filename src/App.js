import './App.css';
import './index.css'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Search from './Pages/Search'
import Landing from './Pages/Landing';
import Demo from './Pages/Demo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
import Signup from './Pages/Signup';






function App() { return (
  <Router>
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Signup' element={<Signup />} />
     <Route path='/Search' element={<Search />} />
     <Route path='/Landing' element={<Landing />} />
     <Route path='/Demo' element={<Demo />} />
     <Route path='/Test' element={<Test />} />
   </Routes>
 </Router>
);
}







export default App;