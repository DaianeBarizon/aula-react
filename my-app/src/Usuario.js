import React, { Component } from "react";
import InputCadastro from "./Components/InputCadastro";
import TableCadastro from "./Components/TableCadastro";
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

  handleDelete = index => {
    let pessoa = [...this.state.pessoas] //pega os antigos
    pessoa.splice(index, 1) //remove o item selecionado e cria uma nova matriz sem o item selecionado
    this.setState({
      pessoas: pessoa //atualiza
    })
  }

  renderTitulo() {
    return <div className="container border mt-5 mb-5">
      <h3 className="mt-3 mb-3 font-weight-bold">Lista de Cadastros</h3>
    </div>
  }

  renderFormulario() {
    return (
      <div className="container border mt-5 mb-5">
        <form className="mt-5 mb-5" onSubmit={this.cadastrarUsuario}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputName" className="font-weight-bold">Nome</label>
              <InputCadastro
                titulo="Nome"
                tipo="text"
                valor={this.state.nome}
                atualizarValor={e => this.setState({ nome: e.target.value })}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail" className="font-weight-bold">Email</label>
              <InputCadastro
                titulo="E-mail"
                tipo="email"
                valor={this.state.email}
                atualizarValor={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputPhone" className="font-weight-bold">Telefone</label>
              <InputCadastro
                titulo="Telefone"
                tipo="text"
                valor={this.state.phone}
                atualizarValor={e => this.setState({ phone: e.target.value })}
              />
            </div>
          </div>
          <button type="button" onClick={this.handleClick.bind(this)} className="btn bg-success text-white">Enviar</button>
        </form>
      </div>
    );
  }

  renderTabela() {
    return (
      <TableCadastro
        pessoas={this.state.pessoas}
        pessoa={this.state.pessoa}
        handleDelete={this.handleDelete} //pessoas indefinido
      //handleDelete={e => this.setState({ pessoas: e.handleDelete })} map indefinido
      />
    );
  }

  render() {
    return (
      <>
        {this.renderTitulo()}
        {this.renderFormulario()}
        {this.renderTabela()}
      </>
    );
  }
}