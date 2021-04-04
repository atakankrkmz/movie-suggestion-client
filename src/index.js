import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
/* CSS */
import "./index.css";

/* Providers */
import AuthProvider from "./providers/AuthProvider.js";

import reportWebVitals from "./reportWebVitals.js"

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);

reportWebVitals();
