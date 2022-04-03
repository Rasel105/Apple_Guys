import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
