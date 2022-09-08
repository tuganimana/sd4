
import './App.css';
import Home from './components/home';
// import Footer from './components/footer';
import Signup from './components/signup';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>∂
    </Routes>
    </>
  );
}

export default App;
