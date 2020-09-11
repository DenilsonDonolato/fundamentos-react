import React from "react";
import listaProdutos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const ProdutosRows = listaProdutos.map((prod, i) => {
    return (
      <tr className={i % 2 === 0 ? "Par" : "Impar"} key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.nome}</td>
        <td>R$ {prod.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{ProdutosRows}</tbody>
      </table>
    </div>
  );
};
