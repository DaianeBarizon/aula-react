import React, { Component } from "react";

export default class Input extends Component {
    render() {
        return (
            <input
                className="form-control"
                placeholder={this.props.titulo}
                type={this.props.tipo}
                value={this.props.valor}
                onChange={this.props.atualizarValor}
            />
        );
    }
}