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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

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
