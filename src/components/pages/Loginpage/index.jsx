import React from "react";
import { withRouter } from "react-router-dom";
import withState from "../../../utils/withState.js";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const Login = ({ store, actions }) => {
  return (
    <div className="container">
      <h3>Giriş Yap</h3>
      {store.error && <p>{store.error}</p>}
      <Form onSubmit={actions.onLogin}>
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
            E-mail formatı örnek@örnek.com şeklinde olmalıdır.
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
        <Form.Text className="text-muted" id="sifreText">
          Şifre minimum 8, maksimum 40 haneli olmalıdır
        </Form.Text>
        <Button variant="primary" type="submit">
          Giriş
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(withState(Login));
