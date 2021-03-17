import axios from "axios";
import React, { Component } from "react";
import SubComment from "./SubComment.jsx";

export default class SubComments extends Component {


    _isMounted = false;


    constructor(props) {
        super(props);

        this.state = {
            subComments: [],
        };
    }
    componentDidMount = async () => {
        this._isMounted = true;

        await axios
            .get(
                `https://localhost:5001/api/Comments/getbysubid?id=${this.props.commentId}`
            )
            .then((res) => {
                if(this._isMounted){

                this.setState({ subComments: res.data });
                }
            })
            .catch((err) => console.log(err));
    };
    componentWillUnmount = () => {
        this._isMounted = false;
    }
    render() {
        const comArray = this.state.subComments;

        return (
            <div>
                {comArray.length > 0 ? (
                    <SubComment  comments={comArray} />
                ) : (
                    <p>alt yorum yok</p>
                )}
            </div>
        );
    }
}
