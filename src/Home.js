import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `signup`; 
    navigate(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vinoch Sample React Page
        </p>
        <button class="my-button" onClick={routeChange}>Sign Up!</button>
      </header>
    </div>
  );
}

export default Home;
