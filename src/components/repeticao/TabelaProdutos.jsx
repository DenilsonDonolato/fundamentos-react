import React from "react";
import listaProdutos from "../../data/produtos";

export default (props) => {
  const ProdutosRows = listaProdutos.map((prod) => {
    return (
      <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.nome}</td>
        <td>{prod.preco}</td>
      </tr>
    );
  });
  return (
    <div>
      <table style={{ width: "100%" }}>
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
