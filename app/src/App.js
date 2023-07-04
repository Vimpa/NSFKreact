import Home from "./pages/Home"; 
import Klubbvatten from "./pages/Klubbvatten";
import Blimedlem from "./pages/Blimedlem"; 
import Kundkorg from "./pages/Kundkorg"; 
import Shop from "./pages/Shop"; 
import Tavling from "./pages/Tavling"; 

import './App.css';
import './klubbvatten.css';
import './tavling.css';
import './shop.css';
import './blimedlem.css';
import './kundkorg.css';



import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Interact from "./components/Interact"; 


import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

function App() {
  return (
   <div>
    <Router>
      <Header />
      <Interact />
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/Klubbvatten" element = {<Klubbvatten/>}/>
        <Route path = "/Blimedlem" element = {<Blimedlem/>}/>
        <Route path = "/Kundkorg" element = {<Kundkorg/>}/>
        <Route path = "/Shop" element = {<Shop/>}/>
        <Route path = "/Tavling" element = {<Tavling/>}/>
      </Routes>
      <Footer />
    </Router>
   </div>
  );
}

export default App;
