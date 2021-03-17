import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class SubComments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subComments: [],
        };
    }
    render() {
        const subCommentArray = this.props.comments;
        return (
            <div>
                {subCommentArray.map((com) => {
                    return (
                        <div className="ml-5 p-2">
                            <Row key={com.id}>
                                <h5>{com.username}</h5>
                            </Row>
                            <Row>
                                <p className="ml-3">{com.text}</p>
                            </Row>
                        </div>
                    );
                })}
            </div>
        );
    }
}
