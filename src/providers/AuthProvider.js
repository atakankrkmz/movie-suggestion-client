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
            onUpdate: this.onUpdate,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
            retrieveUser: this.retrieveUser,
            fillStates: this.fillStates,
            clearErrors: this.clearErrors,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onRegister = async (e) => {
        e.preventDefault();

        const { firstname, lastname, email, password } = this.state;

       await logic
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

    onUpdate = async (e) => {
        
        e.preventDefault();

        await logic.retrieveUser().then(user =>{
            this.setState({
                user
            })
        }).catch(err => console.log(err));
        const {id} = this.state.user;

        console.log(this.state);
        const { firstname, lastname, email, password } = this.state;
        
       await logic
            .updateUser(id, firstname, lastname, email, password)
            .then(() => {
                this.setState({
                    isUpdated: true,
                });
            })
            .catch(({ message }) => {
                this.setState({
                    error: message,
                });
            });
    };
    onLogin = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

       await logic
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

    onLogout = async () => {
       await logic.logout();

        this.setState({
            isLoggedIn: false,
        });
    };

    retrieveUser = async () => {
        await logic.retrieveUser().then((user) => {
            this.setState({
                user,
            });
        });
    };

    onComment = async (comment) => {
       await logic.addComment(comment);
    };

    clearErrors = () => {
        this.setState({
            error: "",
        });
    };

    fillStates = async () =>{
        await logic
            .retrieveUser().then(
                user => {
                    this.setState({
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                    })
                }
            ).catch(err => console.log(err));
    }

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
