import React from "react";
import { withRouter } from "react-router-dom";
import withState from "../../../utils/withState.js";
import { Form, Button } from "react-bootstrap";

const Register = ({ store, actions }) => {
    return (
        <div>
            <h3>Kayıt Ol</h3>
            {store.error && <p>{store.error}</p>}
            <Form onSubmit={actions.onRegister}>
                <Form.Group controlId="formBasicFirstname">
                    <Form.Label>İsim</Form.Label>
                    <Form.Control
                        name="firstname"
                        type="text"
                        placeholder="İsminizi giriniz"
                        value={store.firstname || ""}
                        onChange={(e) => actions.handleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicLastname">
                    <Form.Label>Soyisim</Form.Label>
                    <Form.Control
                        name="lastname"
                        type="text"
                        placeholder="Soyisminizi giriniz"
                        value={store.lastname || ""}
                        onChange={(e) => actions.handleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={store.email || ""}
                        onChange={(e) => actions.handleChange(e)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={store.password || ""}
                        onChange={(e) => actions.handleChange(e)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default withRouter(withState(Register));
