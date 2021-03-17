import React, { Component } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import withState from "../../utils/withState.js";

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setShow = this.setShow.bind(this);
        this.state = {
            subComments: [],
            comment: "",
            sent: false,
        };
    }
    componentDidMount = () => {
        this.setState({ comment: "", sent: false });
    };

    async handleSubmit(e) {
        e.preventDefault();

        let text = this.state.comment;
        let movieId = this.props.movieid;
        let subCommentOf = 0;

        const newComment = {
            text,
            movieId,
            subCommentOf,
        };

        this.props.actions.onComment(newComment);

        this.setState({
            comment: "",
            sent: true,
            show: true,
        });
    }
    onChangeComment(e) {
        this.setState({
            comment: e.target.value,
        });
    }

    setShow() {
        this.setState({
            sent: false,
        });
    }

    render() {
        return (
            <Form
                key={this.props.movieId}
                onSubmit={this.handleSubmit}
                className="mb-5"
            >
                <Toast
                    onClose={this.setShow}
                    show={this.state.sent}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="mr-auto">Yorum</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Yorumunuz tarafımıza iletildi. İncelememizin ardından
                        yayına alınacaktır.
                    </Toast.Body>
                </Toast>
                <Form.Label>Yorum Ekle</Form.Label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Yorumunuz</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.onChangeComment}
                        value={this.state.comment}
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Yorum Yap
                </Button>
            </Form>
        );
    }
}
export default withState(AddComment);
