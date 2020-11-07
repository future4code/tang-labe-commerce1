import React from "react";

function Filters({ aplicarFiltros }) {
  return (
    <>
      <div className="Filtros">
        <h2 className="Titulo.Filtros">Filtros:</h2>
        <div className="filtro">
          <label>Valor Minimo:</label>
          <input
            name="valorMin"
            type="number"
            onChange={(event) => aplicarFiltros(event)}
          />
        </div>
        <div className="filtro">
          <label>Valor Máximo:</label>
          <input
            name="valorMax"
            type="number"
            onChange={(event) => aplicarFiltros(event)}
          />
        </div>
        <div className="filtro">
          <label>Buscar Produto:</label>
          <input
            name="buscarProd"
            type="text"
            onChange={(event) => aplicarFiltros(event)}
          />
        </div>
      </div>
    </>
  );
}

export default Filters;
