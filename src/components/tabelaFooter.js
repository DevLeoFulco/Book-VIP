import React from "react";

const TabelaFooter = (props) => (
  <tfoot>
    <tr>
      <td colSpan="7">Total de Livros: {props.totalLivros}</td>
    </tr>
  </tfoot>
);
export default TabelaFooter;
