import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './dom-component/Link';
import Abouut from './dom-component/about';
import Contact from './dom-component/contact';
import Home from './dom-component/home';
import Prabhakar from './dom-component/firstnested';
import Jyotirani from './dom-component/Use-nevigate-button'; 
import Formm from './dom-component/form';
import Add from './dom-component/add';
import Student from './dom-component/student';
import Createjson from './dom-component/Made-JSON';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar />
  <Jyotirani />
  <p>React. js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.1</p>
  <Formm />
  <Routes>
    <Route path="/home" element={<Home />} ></Route>
    <Route path="/about" element={<Abouut />} ></Route>
    <Route path="/contact/" element={<Contact />} >
    <Route path="bhardwaj" element={<Prabhakar />}></Route>
    </Route>

    <Route path="/json" element={<Student />}></Route>
    <Route path="/createjson" element={<Createjson />}></Route>
    
  </Routes>
  </BrowserRouter>      
    </div>
  );
}

export default App;
