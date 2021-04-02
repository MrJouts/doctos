// import logo from './logo.svg';
// import './App.css';

import CargarTurnos from './pages/CargarTurnos.js'
import Login from './pages/Login.js'
import VerTurnos from './pages/VerTurnos.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components';

const DebugMenu = styled.section`
  position: absolute;
  z-index: 100;
  top: 2vh;
  left: 2vw;
  opacity: .25;
  background: #fff;
  color: #333;
  border: 1px solid #111;
  padding: 2vw;
  border-radius: 2px;
  transition: .2s ease all;
  &:hover{
    opacity: 1;
    transition: .2s ease all;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      a{
        color: #000;
        text-decoration: none;
      }
    }
  }
`;

export default function App() {
  return (
    <Router>
      <div>
        <DebugMenu>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/ver">ver</Link>
            </li>
            <li>
              <Link to="/cargar">cargar</Link>
            </li>
          </ul>
        </DebugMenu>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ver">
            <VerTurnos />
          </Route>
          <Route path="/cargar">
            <CargarTurnos />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// export default App;
