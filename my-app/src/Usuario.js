import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      phone: "",
      pessoas: []
    };
  }

  handleClick() {
    this.setState({ pessoas: [...this.state.pessoas, this.state.nome, this.state.email, this.state.phone] })
    //let array = this.state.pessoas; //pega os antigos
    //array.push(this.state.nome); //adiciona o novo
    //this.setState({pessoas: array});
  }

  render() {
    return (
      <>
        <div className="container border mt-5 mb-5">
          <h3 className="mt-3 mb-3 font-weight-bold">Lista de Cadastros</h3>
          <form className="mt-5 mb-5">
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputName" className="font-weight-bold">Nome</label>
                <input onInput={(val) => this.setState({ nome: val.target.value })}
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="form-control"
                  id="inputName"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEmail" className="font-weight-bold">Email</label>
                <input onInput={(val) => this.setState({ email: val.target.value })}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  id="inputEmail"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPhone" className="font-weight-bold">Telefone</label>
                <input onInput={(val) => this.setState({ phone: val.target.value })}
                  type="text"
                  placeholder="Telefone"
                  className="form-control"
                  id="inputPhone"
                />
              </div>
            </div>
            <button type="button" onClick={this.handleClick.bind(this)} className="btn bg-success text-white">Enviar</button>
          </form>
        </div>
        <div className="container">
          <div className="row alert alert-secondary p-3">
            <div className="col col-md-4">Nome</div>
            <div className="col col-md-4">Email</div>
            <div className="col col-md-4">Telefone</div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-2">
            {this.state.pessoas.map((nome, index) => (
              <div className="col col-md-4" key={index}>{nome}</div>
            ))}
          </div>
        </div>
      </>
    );
  }

  cadastrarUsuario(evento) {
    evento.preventDefault();
    console.log(evento.target.value);
  }
}