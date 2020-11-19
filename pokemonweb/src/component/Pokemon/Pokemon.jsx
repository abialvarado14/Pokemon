import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import pokeball from './pokeball.png';
import './Pokemon.css';

export default class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemonlista: [],
        };


    }

    async componentDidMount() {
        await this.fetchPokemon()
    }

    fetchPokemon = () => {
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
                this.setState({
                    pokemonlista: data
                })
            })
            ;
    }

    mostrarPokemon() {
        const { pokemonlista } = this.state;
        const pokemonlist = [];

        if (pokemonlista && pokemonlista.results) {
            Object.keys(pokemonlista.results).forEach((key, index) => {
                const pokemon = pokemonlista.results[index];
                const card =
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

                pokemonlist.push(card);
            });
        }

        return pokemonlist;
    }

    render() {

        return (
            <Container>
                {this.mostrarPokemon()}
            </Container>

        );
    }

}