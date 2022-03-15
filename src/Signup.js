import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `signup`; 
    navigate(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Sign Up Page</p>
      </header>
    </div>
  );
}

export default Signup;
