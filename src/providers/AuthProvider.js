import React, { Component } from "react";

import logic from "../logic/index.js";

export const Context = React.createContext();

class AuthProvider extends Component {
    state = {
        isLoggedIn: logic.isLoggedIn(),
        user: {},
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        error: "",
    };

    get actions() {
        return {
            onComment: this.onComment,
            handleChange: this.handleChange,
            onRegister: this.onRegister,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
            retrieveUser: this.retrieveUser,
            clearErrors: this.clearErrors,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onRegister = (e) => {
        e.preventDefault();

        const { firstname, lastname, email, password } = this.state;

        logic
            .register(firstname, lastname, email, password)
            .then(() => {
                this.setState({
                    isRegistered: true,
                });
            })
            .catch(({ message }) => {
                this.setState({
                    error: message,
                });
            });
    };

    onLogin = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        logic
            .login(email, password)
            .then(() => {
                this.setState({
                    isLoggedIn: true,
                    email: "",
                    firstname: "",
                    lastname: "",
                    password: "",
                });
            })
            .catch(({ message }) => {
                this.setState({
                    isLoggedIn: false,
                    error: message,
                });
            });
    };

    onLogout = () => {
        logic.logout();

        this.setState({
            isLoggedIn: false,
        });
    };

    retrieveUser = () => {
        logic.retrieveUser().then((user) => {
            this.setState({
                user,
            });
        });
    };

    onComment = (comment) => {
        logic.addComment(comment);
    };

    clearErrors = () => {
        this.setState({
            error: "",
        });
    };

    render() {
        const { children } = this.props;

        return (
            <Context.Provider
                value={{
                    store: this.state,
                    actions: this.actions,
                }}
            >
                {children}
            </Context.Provider>
        );
    }
}

export default AuthProvider;
