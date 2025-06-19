//import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { PrivateRoute } from './component/privateRoute/index';

function App() {

  const getStyles = ({isActive}) => {
    return {
      color: isActive? 'green' : ''
    }
  }

  return (
    <div className="App">

      <NavLink to='/' style={getStyles}>Home</NavLink> ||
      <NavLink to='/cart' style={getStyles}>Cart</NavLink> ||
      <NavLink to='/about' style={getStyles}>About</NavLink> ||
      <NavLink to='/login' style={getStyles}>Login</NavLink> ||

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
