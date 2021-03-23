import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{
    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;
    
        if(imagenes.length === 0) return null;

        console.log(imagenes);

        return (

            <React.Fragment>
 <Imagen/>

<div className="col-12 p-5 row">
{imagenes.map(imagen => (
    <Imagen
    key={imagen.id}
    Imagen={imagen}
    />
))}

</div>


<Paginacion 
paginaAterior={this.props.paginaAnterior}
paginaSiguiente={this.props.paginaSiguiente}/>

            </React.Fragment>
        )
    }

    render() {
        return(
        <React.Fragment>
            { this.mostrarImagenes() }
        </React.Fragment>
        )

    }
}

export default Resultado;