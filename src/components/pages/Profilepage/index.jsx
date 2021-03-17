import React, { Component } from "react";

import withState from "./../../../utils/withState.js";

class Profilepage extends Component {
    componentDidMount() {
        this.props.actions.retrieveUser();
    }

    render() {
        const { user } = this.props.store;

        return (
            <div className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>

                {Object.keys(user).length > 0 ? (
                    <div className="dashboard__info">
                        <p>Name: {user.firstname || "No name"}</p>
                        <p>Name: {user.lastname || "No name"}</p>
                        <p>Email: {user.email || "No email"}</p>
                    </div>
                ) : (
                    "Loading user info..."
                )}
            </div>
        );
    }
}

export default withState(Profilepage);
