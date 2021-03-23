import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

class App extends Component {

  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina === 1) return null;

    pagina -= 1;

    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });

/*   console.log(pagina);
 */}
  paginaSiguiente = () => {
    let pagina = this.state.pagina;

    pagina += 1;

    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });

/* console.log(pagina);
 */}


  consultarApi = () => {
    const pagina = this.state.pagina;
    const url =
      `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=30&page=${pagina}`;

    console.log("url: " + url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }
  // CREANDO LA FUNCION
  datosBusqueda = (terminoParams) => {

    this.setState({
      termino: terminoParams
    }, () => {
      this.consultarApi();
    })

  }



  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="Lead text-center">Buscador de imágenes</p>

          <Buscador
            datosBusqueda={this.datosBusqueda}
          />

        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;