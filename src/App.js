import React from "react";
import styled from 'styled-components';

import ShoppingCart from './components/ShoppingCart'
import CardProduto from './components/CardProduto'

import sideral from "./img/sideral.jpg";
import astronauta from "./img/astronauta.jpg";
import astronautaballoon from "./img/astronautaballoon.jpg";
import cat from "./img/cat.jpg";
import espaço from "./img/espaço.jpg"
import buraconegro from "./img/buraconegro.jpg";
import meteoro from "./img/meteoro.jpg";
import woman from "./img/woman.jpg";



const ContainerPai = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
`;

const CaixaFiltros = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  background-color:#e4efe9;
`;

const QuantidadeProdutos = styled.div`
  padding: 1px;
  margin: 1px;
  text-align: center;
  width: 100%;
  height: 80vh;
  display: grid;
  font-size: 22px;
  flex-wrap: wrap;  
  `;


const ProdutosVenda2 = styled.div`
  padding: 1px;
  margin: 0px;
  text-align: center;
  width: 100%;
  height: 90vh;
  display: flex;
  font-size: 20px;
  flex-wrap: wrap;
  `;



const InputFilter = styled.input`
border: 1px solid gray;
width: 150px;
height: 25px;
margin: 10px 10px;
`
//lista de produtos
const produtos = [
  {
    id: 1,
    nome: 'Astronauta Balloon',
    preco: 100,
    imagem: astronautaballoon
  }, {
    id: 2,
    nome: 'Astronauta Cat',
    preco: 80,
    imagem: cat
  }, {
    id: 3,
    nome: 'Astronauta Espaço',
    preco: 90,
    imagem: astronauta
  }, {
    id: 4,
    nome: 'Espaço Sideral',
    preco: 85,
    imagem: sideral
  }, {
    id: 5,
    nome: 'Buraco Negro',
    preco: 75,
    imagem: buraconegro
  }, {
    id: 6,
    nome: 'Camiseta Meteoro',
    preco: 95,
    imagem: meteoro
  }, {
    id: 7,
    nome: 'Astronauta Woman',
    preco: 120,
    imagem: woman
  }, {
    id: 8,
    nome: 'Camiseta Espacial',
    preco: 85,
    imagem: espaço
  }
]
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
    cart: []
  }

  removeDoCarrinho = (event) => {
    const c = this.state.cart
    c.splice(c.indexOf(Number(event.target.value)),1)    
    this.setState({
      cart: c
    })
  }

  addCarrinho = (event) => {
    const c = this.state.cart
    c.push(Number(event.target.value))
    this.setState({
      cart: c
    })
  }

  render() {
    const cartList = produtos.filter(produto => {
      return this.state.cart.indexOf(produto.id) != -1
    })

    return (

      <ContainerPai className="App">

        <CaixaFiltros classname="filtros">
          <h3>Filtros:</h3>
          <InputFilter
            placeholder="Valor minimo">
          </InputFilter>

          <InputFilter
            placeholder="Valor máximo">
          </InputFilter>

          <InputFilter
            placeholder="Nome do produto">
          </InputFilter>
        </CaixaFiltros>

        <QuantidadeProdutos className="produtos">

          <p>
            Quantidade de produtos: {produtos.length}
            <select className="valor">
              <option value="asc">Preço: Crescente</option>
              <option value="desc">Preço: Decrescente</option>
            </select>
          </p>



          <ProdutosVenda2>

            <CardProduto add={this.addCarrinho} dados={produtos[0]} />
            <CardProduto add={this.addCarrinho} dados={produtos[1]} />
            <CardProduto add={this.addCarrinho} dados={produtos[2]} />
            <CardProduto add={this.addCarrinho} dados={produtos[3]} />
            <CardProduto add={this.addCarrinho} dados={produtos[4]} />
            <CardProduto add={this.addCarrinho} dados={produtos[5]} />
            <CardProduto add={this.addCarrinho} dados={produtos[6]} />
            <CardProduto add={this.addCarrinho} dados={produtos[7]} />



          </ProdutosVenda2>
        </QuantidadeProdutos>

        <ShoppingCart cart={cartList} remove={this.removeDoCarrinho} />

      </ContainerPai>
    );
  }
}

export default App;