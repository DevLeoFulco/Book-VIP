import React, { Component } from "react";
import TabelaHead from "./components/tabelaHead";
import TabelaBody from "./components/tabelaBody";
import TabelaFooter from "./components/tabelaFooter";
class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log("Erro na requisição");
      })
      .finally(function () {
        console.log("Sempre retorna");
      });
  }

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
