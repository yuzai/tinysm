import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Normal from './normal/index';
import Simple from './simple/index';
import Tinysm from './tinysm/index';
import './App.css';

function App() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">normal</Link>
                </li>
                <li>
                <Link to="/simple">simple</Link>
                </li>
                <li>
                <Link to="/tinysm">tinysm</Link>
                </li>
            </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/tinysm">
                <Tinysm />
            </Route>
            <Route path="/simple">
                <Simple />
            </Route>
            <Route path="/">
                <Normal />
            </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;
