import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}


