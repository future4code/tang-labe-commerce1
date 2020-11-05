import React from "react";
import styled from 'styled-components';
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

const ProdutosVenda = styled.div`
  border: 2px dashed black;
  padding: 11px;
  width: 200px;
  height: 40vh;
  display: flex;
  flex-direction: column;
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

const ImgCamiseta = styled.img`
  width:100%;
	height: 120px;
  
`;

const ButtonAdicionar = styled.button`
border:2px solid gray;
border-radius:5px;
display:inline-block;
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:5px 30px;
text-decoration:none;
cursor: pointer;
position:relative;
top:5px;
`;


const CaixaCarrinho = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 250px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  background-color:#e4efe9
`;

const InputMinimo = styled.input`
border: 1px solid gray;
width: 150px;
height: 25px
`;

const InputMaximo = styled.input`
border: 1px solid gray;
width: 150px;
height: 25px
`;
const InputNome = styled.input`
border: 1px solid gray;
width: 150px;
height: 25px
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
        
        <ProdutosVenda2>

        <ProdutosVenda>
        <ImgCamiseta src={astronautaballoon}/>
        Astronauta Balloon
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>
       
        <ProdutosVenda>
        <ImgCamiseta src={cat}/>
        Astronauta Cat
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>

        <ProdutosVenda>
        <ImgCamiseta src={astronauta}/>
        Astronauta Espaço
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>
       
        <ProdutosVenda>
        <ImgCamiseta src={sideral}/>
        Espaço Sideral
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>
            
        <ProdutosVenda>
        <ImgCamiseta src={buraconegro}/>
        Buraco Negro
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>
       
        <ProdutosVenda>
        <ImgCamiseta src={meteoro}/>
        Camiseta Meteoro
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>

        <ProdutosVenda>
        <ImgCamiseta src={woman}/>
        Astronauta Woman
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
        </ProdutosVenda>
       
        <ProdutosVenda>
        <ImgCamiseta src={espaço}/>
        Camiseta Espacial
        <p>R$100,00</p>
        <ButtonAdicionar> Adicionar ao carrinho</ButtonAdicionar>
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
