import React, {useEffect, useState} from 'react';
import { Card, Button} from 'react-bootstrap';
import pokeball from './pokeball.png';
import './Pokemon.css';


const Pokemon = () => {
    const[ pokemonlista, setPokemonlista] = useState([]) //Lista donde cargaremos la API
    const [siguiente, setSiguiente] = useState(null); //La página siguiente de la API
    const [anterior, setAnterior] = useState(null); //La página anterior de la API
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon'); //La página actual de la API

    useEffect(() =>{
        console.log(actual)
        console.log(pokemonlista)
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(actual, myInit)
            .then(res => {
                return res = res.json();
            })
            .then(data => {
                setPokemonlista(data.results)
                setSiguiente(data.next)
                setAnterior(data.previous)
            });
            pokemonlista.map((pokemon) => {
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
    
            })
    }, [actual]);
      


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
        
        <Button type = "submit" className="float-right" variant="outline-warning" onClick={()=>setActual(siguiente)}>
            Siguiente
         </Button>
         <Button type = "submit" className="float-left" variant="outline-warning" onClick={()=>setActual(anterior)}>
            Anterior
         </Button>
        </div>  
    );
}

export default Pokemon
