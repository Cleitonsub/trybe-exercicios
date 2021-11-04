import React from "react";

class Form extends React.Component {
constructor() {
  super();

  this.handleChange = this.handleChange.bind(this);

  this.state = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo_moradia: '',
  };
}

handleChange({ target }) {
  const { name } = target;
  const value = target.name === "nome" ? target.value.toUpperCase() : target.value;

  this.setState({
    [name]: value,
  })
}

  render() {
    return(
      <form className="form">
        <h1>Formulário de cadastro</h1>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="nome" value={this.state.nome} onChange={this.handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" value={this.state.endereco} onChange={this.handleChange} />
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" value={this.state.cidade} onChange={this.handleChange} />
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" name="estado" value={this.state.estado} onChange={this.handleChange} />
          <div className="tipo-moradia">
            <label htmlFor="tipoCasa">Casa</label>
            <input type="radio" id="tipoCasa" name="tipo_moradia" value="Casa" onChange={this.handleChange} />
            <label htmlFor="tipoApartamento">Apartamento</label>
            <input type="radio" id="tipoApartamento" name="tipo_moradia" value="Apartamento" onChange={this.handleChange} />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;