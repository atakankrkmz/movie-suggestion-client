import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute.js";
import withState from "./utils/withState";

/* CSS */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Pages  */
import Homepage from "./components/pages/Homepage/index.jsx";
import Contactpage from "./components/pages/Contactpage/index.jsx";
import MovieDetailpage from "./components/pages/MovieDetailpage/index.jsx";
import NotFound from "./components/pages/NotFound/index.jsx";
import Profilepage from "./components/pages/Profilepage/index.jsx";
import Login from "./components/pages/Loginpage/index.jsx";
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
                        <Route path="/movie/:id" component={MovieDetailpage} />
                        <Route
                            path="/login"
                            render={() =>
                                isLoggedIn ? (
                                    <Redirect to="/profile" />
                                ) : (
                                    <Login />
                                )
                            }
                        />
                        <NotFound />
                    </Switch>
                </div>
        );
    }
}

export default withRouter(withState(App));
