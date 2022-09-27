import './App.css';

import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPages/LandingPage'
import LoginPage from './components/views/LoginPages/LoginPage'
import RegisterPage from './components/views/RegisterPages/RegisterPage'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route  path="/" element={ <LandingPage />}/>
          <Route path="/login" element={ <LoginPage />}/>
          <Route path="/register" element={ <RegisterPage />}/>
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}


export default App;
