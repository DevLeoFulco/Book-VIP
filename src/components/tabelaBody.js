import React from "react";

const TabelaBody = (propos) => (
  <tbody>
    {propos.livros.map((livro, index) => (
      <tr key={livro.id}>
        <td>{livro.id}</td>
        <td>{livro.titulo}</td>
        <td>{livro.autor}</td>
        <td>{livro.disciplina}</td>
        <td>
          <button className="btnRemover">Remover</button>
        </td>
      </tr>
    ))}
  </tbody>
);
export default TabelaBody;
