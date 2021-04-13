import React, { Component } from "react";
import axios from "axios";
import DirectorForHomepage from "./DirectorForHomepage.jsx";
/* Style */
import { ListGroup } from "react-bootstrap";

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
            <div className="px-3">
                <ListGroup horizontal >
                    {this.state.directors.map((dr) => {
                        return (
                            <ListGroup.Item className="px-3">
                                <DirectorForHomepage
                                    key={dr.id}
                                    director={dr}

                                />

                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </div>
        );
    }
}
export default DirectorsForHomepage;
