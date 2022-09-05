
import './App.css';
import Home from './components/home';
// import Footer from './components/footer';
import Signup from './components/signup';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>∂
    </Routes>
    </>
  );
}

export default App;
