import React, { Component } from "react";
import axios from "axios";
import DirectorForHomepage from "./DirectorForHomepage.jsx";
/* Style */
import { Row } from "react-bootstrap";

class DirectorsForHomepage extends Component {
  state = {
    directors: [],
  };

  componentDidMount = async () => {
    await axios
      .get("https://localhost:44368/api/Directors/getall")
      .then((res) => {
        this.setState({
          directors: res.data.data,
        });
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <Row className="flex-row flex-nowrap">
          {this.state.directors.map((dr) => {
            return <DirectorForHomepage key={dr.id} director={dr} />;
          })}
        </Row>
      </div>
    );
  }
}
export default DirectorsForHomepage;
