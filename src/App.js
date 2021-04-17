import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute.js";
import withState from "./utils/withState";

/* CSS */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Pages  */
import Homepage from "./components/pages/Homepage/";
import Contactpage from "./components/pages/Contactpage/";
import MovieDetailpage from "./components/pages/MovieDetailpage/";
import NotFound from "./components/pages/NotFound/";
import Profilepage from "./components/pages/Profilepage/";
import Profilesettingspage from "./components/pages/Profilesettingspage";
import Login from "./components/pages/Loginpage/";
import Register from "./components/pages/Registerpage";
import MoviesByDirector from "./components/pages/DirectorDetailpage/MoviesByDirector";

/* UI */
import NavigationBar from "./components/ui/NavigationBar.js";

class App extends Component {
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.props.store.error !== "") {
        this.props.actions.clearErrors();
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const {
      store: { isLoggedIn },
    } = this.props;
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contactpage} />
          <PrivateRoute path="/profile" component={Profilepage} />
          <PrivateRoute path="/psettings" component={Profilesettingspage} />
          <Route path="/movie/:id" component={MovieDetailpage} />
          <Route path="/director/:id" component={MoviesByDirector} />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/profile" /> : <Login />)}
          />

          <Route
            path="/register"
            render={() =>
              isLoggedIn ? <Redirect to="/profile" /> : <Register />
            }
          />
          <NotFound />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withState(App));
