// import "./App.css";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Work />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }




import './App.css';
import './index.css'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'

function App() { return (
  <Router>
   <Routes>
     <Route path='/' element={<Home />} />
   </Routes>
 </Router>
);
}

export default App;





