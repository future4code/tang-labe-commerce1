import React, { useState } from "react";

function Filters() {
  const [valorMin, setValorMin] = useState(undefined);
  const [valorMax, setValorMax] = useState(undefined);
  const [buscarProd, setBuscarProd] = useState(undefined);

  return (
    <>
      <div className="Filtros">
        <h2 className="Titulo.Filtros">Filtros:</h2>
        <div className="filtro">
          <label>Valor Minimo:</label>
          <input
            type="number"
            onChange={(event) => setValorMin(event.target.value)}
          />
        </div>
        <div className="filtro">
          <label>Valor Máximo:</label>
          <input
            type="number"
            onChange={(event) => setValorMax(event.target.value)}
          />
        </div>
        <div className="filtro">
          <label>Buscar Produto:</label>
          <input
            type="text"
            onChange={(event) => setBuscarProd(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Filters;
