import React, { Component } from 'react'
import './Home.css'
import { Jumbotron, Container} from 'react-bootstrap';

export default class Home extends Component {
   
    render() {

        return (
            <Container>
                <div className="outer-div">
                    <div className="jumbotron-div">
                        <Jumbotron className="jumbo-boy" fluid>
                            <h1>Registro Pokemon</h1>
                            <h5>¡Encuentra la información de tu pokemon favorito!</h5>
                        </Jumbotron>
                    </div>

                </div>
            </Container>
        );
    }
}

