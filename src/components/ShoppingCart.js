import React from "react";
import styled from 'styled-components';

const CaixaCarrinho = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  background-color:#e4efe9;
`

const ProductContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
`
const PNome = styled.p`
    width: 70%;
`

export default class ShoppingCart extends React.Component {

    render() {
        return (

            <CaixaCarrinho className="carrinho">
                <h3>Seu carrinho:</h3>

                {this.props.cart.map((produto,index) => {
                    return <ProductContainer key={index}>
                        <PNome>{produto.nome}</PNome>
                        <p>{`R$ ${produto.preco}`}</p>
                        <button value={produto.id} onClick={this.props.remove}>Remover</button>
                    </ProductContainer>
                })
                }
                <p> Total: R$ {
                    this.props.cart.reduce((total, atual) => {
                        return total + atual.preco
                    }, 0)
                }</p>

            </CaixaCarrinho>
        )
    }
}