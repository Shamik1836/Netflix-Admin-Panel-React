import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Home />}
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Home />}
        </Route>
        {user && (
          <>
            <Route path="/movies">{<Home type="movie" />}</Route>
            <Route path="/series">{<Home type="series" />}</Route>
            <Route path="/watch">{<Watch />}</Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
