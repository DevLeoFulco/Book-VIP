import React, { Component } from "react";
import TabelaHead from "./components/tabelaHead";
import TabelaBody from "./components/tabelaBody";
import TabelaFooter from "./components/tabelaFooter";
class App extends Component {
  state = {
    livros: [
      {
        id: 9781259872976,
        titulo: "Engenharia de Software - Uma abordagem Profissional",
        autor: "Roger S. Pressman",
        disciplina: "Engengaria de Software",
      },
      {
        id: 9788565837194,
        titulo: "JavaScript - O guia definitivo",
        autor: "Flanagan, David",
        disciplina: "Linguagem de Programação",
      },
      {
        id: 9788563630506,
        titulo: "Modelagem de Banco de dados",
        autor: "Paulo Henrique Cayres",
        disciplina: "Banco de dados",
      },
      {
        id: 9788563630032,
        titulo: "Fundamentos de Governança de TI",
        autor: "Edson Roberto Gaseta",
        disciplina: "Governança",
      },
    ],
  };

  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFooter totalLivros={this.state.livros.length} />
      </table>
    );
  }
}
export default App;

// function App() {
//   return (
//     <table>
//       <TabelaHead />
//       <TabelaBody />
//       <TabelaFooter />
//     </table>
//   );
// }

// export default App;
