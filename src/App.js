import React from "react";
import styled from 'styled-components';
import sideral from "./img/sideral.jpg";
import astronauta from "./img/astronauta.jpg";
import astronautaballoon from "./img/astronautaballoon.jpg";
import cat from "./img/cat.jpg";



const ContainerPai = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px
`;

const CaixaFiltros = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

const QuantidadeProdutos = styled.div`
  padding: 1px;
  margin: 1px;
  text-align: center;
  width: 100%;
  height: 80vh;
  display: flex;
  font-size: 22px;
  flex-wrap: wrap;
  `;

const ProdutosVenda = styled.div`
  border: 2px dashed black;
  padding: 10px;
  width: 200px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ProdutosVenda2 = styled.div`
padding: 1px;
  margin: 1px;
  text-align: center;
  width: 100%;
  height: 80vh;
  display: flex;
  font-size: 22px;
  flex-wrap: wrap;
  `;

const ImgCamiseta = styled.img`
  max-width:50%;
	height:auto;
`;

const CaixaCarrinho = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

const InputMinimo = styled.input`
border: 1px solid black;
width: 150px;
height: 20px
`;

const InputMaximo = styled.input`
border: 1px solid black;
width: 150px;
height: 20px
`;
const InputNome = styled.input`
border: 1px solid black;
width: 150px;
height: 20px
`;



export default function App() {
  return (

    <ContainerPai className="App">

    <CaixaFiltros classname="filtros">
        <p>Filtros:</p>
        <InputMinimo
          placeholder="Valor minimo">
        </InputMinimo>
        <p></p>
        <InputMaximo 
          placeholder="Valor máximo">
        </InputMaximo>
        <p></p>
        <InputNome
          placeholder="Nome do produto">
        </InputNome>
      </CaixaFiltros>

      <QuantidadeProdutos className="produtos">

        <p>
          Quantidade de produtos: 6
          <select classname="valor">
          <option value="asc">Preço: Crescente</option>
          <option value="desc">Preço: Decrescente</option>
          </select>
        </p>

        <ProdutosVenda>
        <ImgCamiseta src={sideral}/>
        Camiseta Sideral
        <p>R$100,00</p>
        <button> Adicionar ao carrinho</button>
        </ProdutosVenda>
        
        <ProdutosVenda>
        <ImgCamiseta src={astronauta}/>
        Camiseta Astronauta
        <p>R$100,00</p>
        <button> Adicionar ao carrinho</button>
        </ProdutosVenda>

        <ProdutosVenda2>
        <ProdutosVenda>
        <ImgCamiseta src={astronautaballoon}/>
        Astronauta Balloon
        <p>R$100,00</p>
        <button> Adicionar ao carrinho</button>
        </ProdutosVenda>
       
        <ProdutosVenda>
        <ImgCamiseta src={cat}/>
        Astronauta Cat
        <p>R$100,00</p>
        <button> Adicionar ao carrinho</button>
        </ProdutosVenda>
       
        </ProdutosVenda2>
          
      </QuantidadeProdutos>

      <CaixaCarrinho className="carrinho">
        <p>Carrinho:</p>
        <p> Total: R$00,00</p>
      </CaixaCarrinho>
    </ContainerPai>
  );
}
