import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/* Style */
import { Form, Button, Modal } from "react-bootstrap";

import withState from "./../../../utils/withState.js";

class Profilesettingspage extends Component {
    constructor(props) {
        super(props);
        props.actions.fillStates();

        this.state = {
            showModal: false,
        };
    }

    saveSettings = (e) => {
        this.displayModal();
        this.props.actions.onUpdate(e);
    };

    displayModal = (e) => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };
    render() {
        return (
            <div className="dashboard container">
                <h1 className="dashboard__title">Profil Ayarları</h1>
                <Modal show={this.state.showModal} onHide={this.displayModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Profil Ayarları</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Yeni profil ayarlarını kaydet.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.displayModal}>
                            Kapat
                        </Button>
                        <Button
                            variant="primary"
                            onClick={(e) => this.saveSettings(e)}
                        >
                            Kaydet
                        </Button>
                    </Modal.Footer>
                </Modal>
                {this.props.store.error && <p>{this.props.store.error}</p>}
                {this.props.store.isLoggedIn ? (
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicFistname">
                                <Form.Label>İsim</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Yeni Adınızı Giriniz"
                                    value={this.props.store.firstname}
                                    name="firstname"
                                    onChange={(e) =>
                                        this.props.actions.handleChange(e)
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>Soyisim</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Yeni Soyisiminizi Giriniz"
                                    value={this.props.store.lastname}
                                    name="lastname"
                                    onChange={(e) =>
                                        this.props.actions.handleChange(e)
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Adresi</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Yeni E-Mailinizi Giriniz"
                                    value={this.props.store.email}
                                    name="email"
                                    onChange={(e) =>
                                        this.props.actions.handleChange(e)
                                    }
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Şifre</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Yeni Şifrenizi Giriniz"
                                    value={this.props.store.password}
                                    name="password"
                                    onChange={(e) =>
                                        this.props.actions.handleChange(e)
                                    }
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                onClick={this.displayModal}
                            >
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
