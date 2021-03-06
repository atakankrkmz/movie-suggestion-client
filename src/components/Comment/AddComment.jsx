import React, { Component } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import withState from "../../utils/withState.js";

class AddComment extends Component {
  _isMounted = false;
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

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleSubmit(e) {
    e.preventDefault();

    let text = this.state.comment;
    let movieId = this.props.movieid;
    let subCommentOf = this.props.commentId || 0;

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
      <Form onSubmit={this.handleSubmit} className="mb-3">
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
            Yorumunuz tarafımıza iletildi. İncelememizin ardından yayına
            alınacaktır.
          </Toast.Body>
        </Toast>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Yorumunuz</Form.Label>
          <Form.Control
            type="text"
            onChange={this.onChangeComment}
            value={this.state.comment}
            placeholder="Yorumunuzu bu alana giriniz..."
            as="textarea"
            rows={2}
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
