import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/* Style */
import { Form, Button } from "react-bootstrap";

import withState from "./../../../utils/withState.js";

class Profilesettingspage extends Component {
    constructor(props) {
        super(props);
        props.actions.fillStates();
    }
    render() {
        return (
            <div className="dashboard">
                <h1 className="dashboard__title">Profil Ayarları</h1>
                {this.props.store.error && <p>{this.props.store.error}</p>}
                {this.props.store.isLoggedIn ? (
                    <div>
                        <Form onSubmit={this.props.actions.onUpdate}>
                            <Form.Group controlId="formBasicFistname">
                                <Form.Label>İsim</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Yeni Adınızı Giriniz"
                                    value={this.props.store.firstname}
                                    name="firstname"
                                    onChange={(e) => this.props.actions.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>Soyisim</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Yeni Soyisiminizi Giriniz"
                                    value={this.props.store.lastname}
                                    name="lastname"
                                    onChange={(e) => this.props.actions.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Adresi</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Yeni E-Mailinizi Giriniz"
                                    value={this.props.store.email}
                                    name="email"
                                    onChange={(e) => this.props.actions.handleChange(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Şifre</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Yeni Şifrenizi Giriniz"
                                    value={this.props.store.password}
                                    name="password"
                                    onChange={(e) => this.props.actions.handleChange(e)}
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary">
                                Uygula
                            </Button>
                        </Form>
                    </div>
                ) : (
                    <div>
                        <p>test</p>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(withState(Profilesettingspage));
