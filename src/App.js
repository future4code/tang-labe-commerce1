import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Filters from "./components/Filters";
import ShoppingCart from "./components/ShoppingCart";
import CardProduto from "./components/CardProduto";

import sideral from "./img/sideral.jpg";
import astronauta from "./img/astronauta.jpg";
import astronautaballoon from "./img/astronautaballoon.jpg";
import cat from "./img/cat.jpg";
import espaço from "./img/espaço.jpg";
import buraconegro from "./img/buraconegro.jpg";
import meteoro from "./img/meteoro.jpg";
import woman from "./img/woman.jpg";

const ContainerPai = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  background-color: black;
  height: 100%;
  color: whitesmoke;
`;

const QuantidadeProdutos = styled.div`
  padding: 5px;
  margin: 1px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: grid;
  font-size: 22px;
  color: white;
  flex-wrap: wrap;
  background-color: black;
`;

const ProdutosVenda2 = styled.div`
  padding: 1px;
  margin: 0px;
  text-align: center;
  width: 100%;
  height: 125vh;
  display: flex;
  font-size: 20px;
  flex-wrap: wrap;
`;

const InputFilter = styled.input`
  border: 1px solid gray;
  width: 150px;
  height: 25px;
  margin: 10px 10px;
`;
//lista de produtos
const produtos = [
  {
    id: 1,
    nome: "Astronauta Balloon",
    preco: 100,
    imagem: astronautaballoon,
  },
  {
    id: 2,
    nome: "Astronauta Cat",
    preco: 80,
    imagem: cat,
  },
  {
    id: 3,
    nome: "Astronauta Espaço",
    preco: 90,
    imagem: astronauta,
  },
  {
    id: 4,
    nome: "Espaço Sideral",
    preco: 85,
    imagem: sideral,
  },
  {
    id: 5,
    nome: "Buraco Negro",
    preco: 75,
    imagem: buraconegro,
  },
  {
    id: 6,
    nome: "Camiseta Meteoro",
    preco: 95,
    imagem: meteoro,
  },
  {
    id: 7,
    nome: "Astronauta Woman",
    preco: 120,
    imagem: woman,
  },
  {
    id: 8,
    nome: "Camiseta Espacial",
    preco: 85,
    imagem: espaço,
  },
];
/* 
modelo produto
  {
    id: ,
    nome:,
    preco:,
    imagem:
  }, 
  */

class App extends React.Component {
  state = {
    cart: [],
    filtros: {
      valorMin: null,
      valorMax: null,
      buscarProd: null,
    },
  };

  removeDoCarrinho = (event) => {
    const c = this.state.cart;
    c.splice(c.indexOf(Number(event.target.value)), 1);
    this.setState({
      cart: c,
    });
  };

  addCarrinho = (event) => {
    const c = this.state.cart;
    c.push(Number(event.target.value));
    this.setState({
      cart: c,
    });
  };

  aplicarFiltros = (event) => {
    this.setState({
      ...this.state,
      filtros: {
        ...this.state.filtros,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const cartList = produtos.filter((produto) => {
      return this.state.cart.indexOf(produto.id) != -1;
    });

    return (
      <ContainerPai className="App">
        <Filters aplicarFiltros={this.aplicarFiltros.bind()} />

        <QuantidadeProdutos className="produtos">
          <p>
            Quantidade de produtos: {produtos.length}
            <select className="valor">
              <option value="asc">Preço: Crescente</option>
              <option value="desc">Preço: Decrescente</option>
            </select>
          </p>

          <ProdutosVenda2>
            {produtos
              .filter((produto) => {
                const filtroValorMinAplicado = (produto) =>
                  !this.state.filtros.valorMin ||
                  this.state.filtros.valorMin <= produto.preco;

                const filtroValorMaxAplicado = (produto) =>
                  !this.state.filtros.valorMax ||
                  this.state.filtros.valorMax >= produto.preco;

                const filtroBuscarProdAplicado = (produto) =>
                  !this.state.filtros.buscarProd ||
                  produto.nome
                    .toLowerCase()
                    .includes(this.state.filtros.buscarProd.toLowerCase());

                return (
                  filtroValorMinAplicado(produto) &&
                  filtroValorMaxAplicado(produto) &&
                  filtroBuscarProdAplicado(produto)
                );
              })

              .map((produto) => (
                <CardProduto add={this.addCarrinho} dados={produto} />
              ))}
          </ProdutosVenda2>
        </QuantidadeProdutos>

        <ShoppingCart cart={cartList} remove={this.removeDoCarrinho} />
      </ContainerPai>
    );
  }
}

export default App;
