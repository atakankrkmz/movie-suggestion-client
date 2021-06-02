import React from "react";
import withState from "./../../utils/withState";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

const NavigationBar = ({ store, actions }) => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand href="/">
        <img
          width="120px"
          src={`${API_URL}ui/blue_logo_500x500.png`}
          alt="otoKON"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Anasayfa</Nav.Link>
          <Nav.Link href="/contact">İletişim</Nav.Link>
        </Nav>
        <Nav ml="auto">
          {store.isLoggedIn ? (
            <NavDropdown title="Kullanıcı İşlemleri" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={actions.onLogout}>
                Çıkış Yap
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown title="Giriş Yap" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Giriş Yap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Kayıt Ol</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withState(NavigationBar);
