import React, {useEffect, useState} from 'react';
import logopokemon from '../Home/logopokemon.png';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DetallePokemon = () => {

        return (
            <Container>
                <div className="outer-div">
                    <div className="jumbotron-div">
                        <Jumbotron className="jumbo-boy" >
                            <h1>Detalle Pokemón </h1>
                            <img src={logopokemon} className="logo" alt="logo" />
                            <h5>¡Encuentra la información de tu pokemón favorito!</h5>
                        </Jumbotron>
                    </div>

                </div>
              <br />
            </Container>           
            
        );
    
}

export default DetallePokemon
