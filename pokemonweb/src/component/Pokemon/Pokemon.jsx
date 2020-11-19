import React, {useEffect, useState} from 'react';
import { Card, Button} from 'react-bootstrap';
import pokeball from './pokeball.png';
import './Pokemon.css';


const Pokemon = () => {
    const[ pokemonlista, setPokemonlista] = useState([])

    useEffect(() =>{
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch('https://pokeapi.co/api/v2/pokemon', myInit)
            .then(res => {
                return res = res.json();
            })
            .then(data => {
                setPokemonlista(data.results)
            });

    }, []);

    return (
        <div>
        {pokemonlista.map((pokemon) => {
            return(
                <Card border="warning" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>
                                {pokemon.name}
                                <Button className="float-right" variant="outline-warning"><img src={pokeball} className="pokeball" alt="pokeball" />
                                    Información
                                </Button>
                            </Card.Title>

                        </Card.Body>
                    </Card>
            )

        })}
        </div>  
    );
}

export default Pokemon
