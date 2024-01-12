import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LinksNavbar from './components/LinksNavbar';

function App() {

  return (
    <>
      <LinksNavbar />
      <Navbar/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
