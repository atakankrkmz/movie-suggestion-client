import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class DirectorForHomepage extends Component {
    render() {
        return (
            <div >
                <Image className="rounded mx-auto  d-block" width={150} src={`https://localhost:44368/uploads/directorcontent/posters/${this.props.director.portre}`} roundedCircle/>
                <h4 className="text-center mb-2">{this.props.director.name}</h4>
            </div>
        );
    }
}
