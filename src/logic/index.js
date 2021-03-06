// eslint-disable-next-line
"use strict";

const { validateEmail } = require("./../utils/validate-email.js");

const logic = {
  _url: process.env.REACT_APP_API_URL,

  /**
   *
   * @param {*} field
   * @param {*} value
   */
  _validateStringField(field, value) {
    if (typeof value !== "string" || !value.trim().length)
      throw Error(`${field} is not valid`);
  },

  /**
   *
   * @param {*} email
   */
  _validateEmail(email) {
    if (!validateEmail(email)) throw Error(`${email} is not a valid email`);
  },

  /**
   *
   * @param {*} userId
   */
  _userId(userId) {
    if (typeof userId !== "undefined") {
      sessionStorage.setItem("userId", userId);

      return;
    }

    return sessionStorage.getItem("userId");
  },
  /**
   *
   * @param {*} firstname
   * @param {*} lastname
   */
  _userName(firstname, lastname) {
    if (typeof userId !== "undefined") {
      sessionStorage.setItem("firstname", firstname);
      sessionStorage.setItem("lastname", lastname);

      return;
    }

    return sessionStorage.getItem("firstname");
  },
  /**
   *
   * @param {*} token
   */
  _token(token) {
    if (typeof token !== "undefined") {
      sessionStorage.setItem("token", token);

      return;
    }

    return sessionStorage.getItem("token");
  },

  /**
   *
   */
  isLoggedIn() {
    const res = !!(this._userId() && this._token());

    return res;
  },

  /**
   *
   * @param {*} email
   * @param {*} password
   * @param {*} name
   */
  register(firstname, lastname, email, password) {
    return Promise.resolve().then(() => {
      this._validateStringField("firstname", firstname);
      this._validateStringField("lastname", lastname);
      this._validateEmail(email);
      this._validateStringField("password", password);

      return fetch(`${this._url}api/Auth/register`, {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 201) {
            return res;
          }

          return res.json().then(({ message }) => {
            throw Error(message);
          });
        })
        .then((res) => res.json())
        .then(() => true);
    });
  },

  /**
   * @param {*} id
   * @param {*} firstname
   * @param {*} lastname
   * @param {*} email
   * @param {*} password
   */
  updateUser(id, firstname, lastname, email, password) {
    return Promise.resolve().then(() => {
      this._validateStringField("firstname", firstname);
      this._validateStringField("lastname", lastname);
      this._validateEmail(email);
      this._validateStringField("password", password);

      return fetch(`${this._url}api/Auth/update`, {
        method: "PUT",
        body: JSON.stringify({ id, firstname, lastname, email, password }),
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Methods": "*",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res;
          }

          return res.json().then(({ message }) => {
            throw Error(message);
          });
        })
        .then((res) => res.json())
        .then(() => true);
    });
  },

  /**
   *
   * @param {*} email
   * @param {*} password
   */
  login(email, password) {
    return Promise.resolve().then(() => {
      this._validateEmail(email);
      this._validateStringField("password", password);

      return fetch(`${this._url}api/Auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res;
          }

          return res.json().then(({ message }) => {
            throw Error(message);
          });
        })
        .then((res) => res.json())
        .then(({ token, userId }) => {
          this._token(token);
          this._userId(userId);

          return true;
        });
    });
  },

  /**
   *
   */
  logout() {
    delete this.token;
    delete this.userId;

    sessionStorage.clear();
  },
  addComment(comment) {
    return fetch(`${this._url}api/Comments/add`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._token()}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        return res;
      }

      return res.json().then(({ message }) => {
        throw Error(message);
      });
    });
  },
  retrieveUser() {
    return fetch(`${this._url}api/User/getbyid?id=${this._userId()}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res;
        }

        return res.json().then(({ message }) => {
          throw Error(message);
        });
      })
      .then((res) => res.json())
      .then((user) => user);
  },
};

module.exports = logic;
