import React, { Component } from 'react';
import './Home.css';
import logopokemon from './logopokemon.png';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import Pokemon from '../Pokemon/Pokemon';



export default class Home extends Component {
   
    render() {
        return (
            <Container>
                <div className="outer-div">
                    <div className="jumbotron-div">
                        <Jumbotron className="jumbo-boy" >
                            <h1>Registro </h1>
                            <img src={logopokemon} className="logo" alt="logo" />
                            <h5>¡Encuentra la información de tu pokemon favorito!</h5>
                        </Jumbotron>
                    </div>

                </div>
              <br />
              <Pokemon />
            </Container>           
            
        );
    }
}


