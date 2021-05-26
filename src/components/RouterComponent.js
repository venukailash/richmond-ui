import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Login from '../components/Login/Login';
import Items from '../components/Items/Items';
import App from '../components/App/App';

function RouterComponent() {
    return (
        <Router >
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/Items">
                <Items />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
        </Router>
    )
}

export default RouterComponent;