import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Signup from "./Signup";

function App() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  };

  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>
  );
}

export default App;
