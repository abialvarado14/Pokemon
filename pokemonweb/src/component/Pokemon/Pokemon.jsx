import React, {useEffect, useState} from 'react';
import { Card, Button, Form, FormControl} from 'react-bootstrap';
import pokeball from './pokeball.png';
import './Pokemon.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const Pokemon = () => {
    const[ pokemonlista, setPokemonlista] = useState([]) //Lista donde cargaremos la API
    const [siguiente, setSiguiente] = useState(null); //La página siguiente de la API
    const [anterior, setAnterior] = useState(null); //La página anterior de la API
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon'); //La página actual de la API
    const[id, setId] = useState()

    useEffect(() =>{
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
    }, [actual]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
      


    return (
        <div>
            <div className="mb-3">
                <Form inline>
                    <FormControl 
                        type="text" 
                        required
                        placeholder="Busca tu pokemón favorito" 
                        value = {id}
                        onChange={e => setId((e.target.value).toLowerCase())}
                        className="mr-sm-2" />
                    <Link to ={`/DetallePokemon/${id}`}>
                        <div>
                        <Button type = "submit" variant="outline-warning">
                            <img src={pokeball} className="pokeball" alt="pokeball"/>
                            Search</Button>                                               
                        </div>
                    </Link>              
                  </Form>               
            </div>

        {pokemonlista.map((pokemon) => {
            let idpokemon = pokemon.url.split('/')[pokemon.url.split('/').length-2]
            return(
                <Card border="warning" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>
                                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}                         
                                    <Link to ={`/DetallePokemon/${idpokemon}`}>
                                        <div>
                                            <Button className="float-right" variant="outline-warning">
                                                <img src={pokeball} className="pokeball" alt="pokeball"/>
                                                Información
                                            </Button>
                                        </div>
                                    </Link>                               
                            </Card.Title>

                        </Card.Body>
                    </Card>
            )

        })}

        <div className="col text-center">
            <Button type = "submit" disabled={anterior==null}variant="outline-light" style={{ margin:'16px' }} onClick={()=>setActual(anterior)}>
                Anterior
            </Button>
            <Button type = "submit" disabled={siguiente==null} variant="outline-light" style={{ margin:'16px' }} onClick={()=>setActual(siguiente)}>
                Siguiente
            </Button>
        </div> 
        
        </div>  
    );
}

export default Pokemon
