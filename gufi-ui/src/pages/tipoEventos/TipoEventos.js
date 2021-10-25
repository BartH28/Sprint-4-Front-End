import { Component } from "react";

export default class TipoEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            listaTipoEventos: []
        }
    }

    buscartiposEvenstos = () => {

        console.log("")

        fetch('http://localhost:5000/index.html')

        .then( resposta => resposta.json)
        .then( dados => this.state({listaTipoEventetos: dados}))

        .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscartiposEvenstos()
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <main>
                    <section>
                        <h2>Lista de tipo de eventos  </h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titulo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaTipoEventos.map( (tipoEvento) => {
                                            return(

                                                <tr key={tipoEvento.idTipoEvento}>
                                                    <td>{tipoEvento.idTipoEvento}</td>
                                                    <td>{tipoEvento.tituloTipoEvento}</td>
                                                </tr>
                                            ) 
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}


