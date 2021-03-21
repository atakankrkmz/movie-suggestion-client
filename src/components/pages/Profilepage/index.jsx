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
                <h1 className="dashboard__title">Profil</h1>

                {Object.keys(user).length > 0 ? (
                    <div className="dashboard__info">
                        <p>İsim: {user.firstname || "No name"}</p>
                        <p>Soyisim: {user.lastname || "No name"}</p>
                        <p>E-mail: {user.email || "No email"}</p>
                    </div>
                ) : (
                    <h3>Profil Yükleniyor</h3>
                )}
            </div>
        );
    }
}

export default withState(Profilepage);
