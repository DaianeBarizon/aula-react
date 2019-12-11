import React, { Component } from "react";

export default class Table extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row alert alert-secondary p-3">
                        <div className="col col-md-3">Nome</div>
                        <div className="col col-md-3">Email</div>
                        <div className="col col-md-3">Telefone</div>
                        <div className="col col-md-3">Excluir</div>
                    </div>
                </div>
                <div className="container">
                    {this.props.pessoas.map((pessoa, index) => (
                        <div className="row mb-2" key={index}>
                            <div className="col col-md-3">
                                {pessoa.nome}
                            </div>
                            <div className="col col-md-3">
                                {pessoa.email}
                            </div>
                            <div className="col col-md-3">
                                {pessoa.phone}
                            </div>
                            <button type="button"
                                value={this.props.pessoa}
                                //onClick={this.handleDelete.bind(this, index)}
                                onClick={() => this.props.handleDelete(index)}
                                className="btn bg-danger text-white"
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}