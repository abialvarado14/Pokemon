import React, {useEffect, useState} from 'react';
import logopokemon from '../Home/logopokemon.png';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import { Link, useParams, BrowserRouter as Router } from 'react-router-dom';
import './DetallePokemon.css';


const DetallePokemon = () => {

    const[ imagenT, setImagenT] = useState(null) //Referencia a back_default
    const[imagenF, setImagenF] = useState(null) //Referencia a front_default
    const{id}= useParams()


    useEffect(() =>{
        var myHeaders = new Headers();
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(url, myInit)
            .then(res => {
                return res = res.json();
            })
            .then(data => {
                setImagenT(data.sprites.back_default)
                setImagenF(data.sprites.front_default)
            });
    }, []);


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
                <div id="contenedor">
                    <img src={imagenT} className="media" alt="media" /> 
                    <img src={imagenF} className="media" alt="media" />
                </div>
                <Link to ="/">
                            <div className="col text-center">
                                <Button variant="outline-light">
                                    Inicio
                                </Button>
                            </div>
                </Link> 

            </Container>           
            
        );
    
}

export default DetallePokemon
