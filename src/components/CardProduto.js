import React from "react";
import styled from 'styled-components';


const Produto = styled.div`
  border: 2px dashed black;
  padding: 10px;
  margin: 5px;
  width: 200px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const ImgCamiseta = styled.img`
  width:100%;  
`;

const ButtonAdicionar = styled.button`
border:2px solid gray;
border-radius:5px;
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:5px 30px;
top:5px;
`;

export default class ShoppingCart extends React.Component {

    render() {
        return (

            <Produto >
                <ImgCamiseta src={this.props.dados.imagem} />
                <p>{this.props.dados.nome}</p>
                <p>{`R$ ${this.props.dados.preco}`}</p>
                <ButtonAdicionar onClick={this.props.add} value={this.props.dados.id}> Adicionar ao carrinho</ButtonAdicionar>
            </Produto>
        )
    }
}