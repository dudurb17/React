//Importar o React
import React from 'react';

//Criar a classe com o nome Headers
class Article extends React.Component {
  render() {
    return (
      <div>
        <h3>Titulo do artigo</h3>
        <p>Conteúdo do artigo</p>
      </div>
    );
  }
}

//Exportar o componente
export default Article;
