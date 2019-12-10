import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
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
    this.setState({ pessoas: [...this.state.pessoas, { nome: this.state.nome, email: this.state.email, phone: this.state.phone }], nome: "", email: "", phone: "" })
    //let array = this.state.pessoas; //pega os antigos
    //array.push(this.state.nome); //adiciona o novo
    //this.setState({pessoas: array});
  }

  handleDelete(index) {
    let pessoa = [...this.state.pessoas] //pega os antigos
    pessoa.splice(index, 1) //remove o item selecionado e cria uma nova matriz sem o item selecionado
    this.setState({
      pessoas: pessoa //atualiza
    })
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
                <input onChange={(val) => this.setState({ nome: val.target.value })}
                  type="text"
                  name="name"
                  value={this.state.nome}
                  placeholder="Nome"
                  className="form-control"
                  id="inputName"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEmail" className="font-weight-bold">Email</label>
                <input onChange={(val) => this.setState({ email: val.target.value })}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  className="form-control"
                  id="inputEmail"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPhone" className="font-weight-bold">Telefone</label>
                <input onChange={(val) => this.setState({ phone: val.target.value })}
                  type="text"
                  name="phone"
                  value={this.state.phone}
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
            <div className="col col-md-3">Nome</div>
            <div className="col col-md-3">Email</div>
            <div className="col col-md-3">Telefone</div>
            <div className="col col-md-3">Excluir</div>
          </div>
        </div>
        <div className="container">
          {this.state.pessoas.map((pessoa, index) => (
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
              <button type="button" onClick={this.handleDelete.bind(this, index)} className="btn bg-danger text-white">Excluir</button>
            </div>
          ))}
        </div>
      </>
    );
  }
  /* cadastrarUsuario(evento) {
    evento.preventDefault();
    console.log(evento.target.value);
  } */
}