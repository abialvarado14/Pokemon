import React, {useEffect, useState} from 'react';
import logopokemon from '../Home/logopokemon.png';
import { Jumbotron, Container, Button, Card, Row, Col, Badge} from 'react-bootstrap';
import { Link, useParams, BrowserRouter as Router } from 'react-router-dom';
import './DetallePokemon.css';


const DetallePokemon = () => {

    const[ imagenT, setImagenT] = useState(null) //Referencia a back_default
    const[imagenF, setImagenF] = useState(null) //Referencia a front_default
    const[nombre, setNombre] = useState(null) //Referencia a name
    const[altura, setAltura] = useState(null) //Referencia a height
    const[peso, setPeso] = useState(null) //Referencia a weight
    const[experiencia, setExperiencia] = useState(null)//Referencia a base_experience
    const[orden, setOrden] = useState(null) // Referiencia a order
    const{id}= useParams() //index usado para ver detalle del pokemon en el url
    const[ habilidades, setHabilidades] = useState([]) //Lista de habilidades del pokemon
    const[ stats, setStats] = useState([]) //Lista de stats del pokemon
    const[especie, setEspecie] = useState(null) //Especie
    const[items, setItems] = useState([]) // Lista de held_items


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
                setNombre(data.name[0].toUpperCase() + data.name.slice(1))
                setAltura(data.height)
                setPeso(data.weight)
                setExperiencia(data.base_experience)
                setOrden(data.order)
                setHabilidades(data.abilities)
                setStats(data.stats)
                setEspecie(data.species.name)
                setItems(data.held_items)
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

                <div className="col text-center">
                        <h1>
                            <Badge variant="light">{nombre}</Badge>
                        </h1>
                </div>
                
                <Container>
                    <Row>
                         <Col>
                         <Card className="mb-2" bg="dark" text="light" border="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="col text-center">Stats</Card.Title>
                                <Card.Text>
                                {stats.map((stat) => {
                                    return(
                                        <h6>{stat.stat.name}</h6>
                                    )
                                 })}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    <Card bg="dark" text="light" border="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="col text-center">Held Items</Card.Title>
                                <Card.Text>
                                {items.map((item) => {
                                    return(
                                        <h6>{item.item.name}</h6>
                                    )
                                 })}
                                </Card.Text>
                            </Card.Body>
                    </Card>                         
                         </Col>
                            <div id="contenedor">
                                <img src={imagenT} className="media" alt="media" /> 
                                 <img src={imagenF} className="media" alt="media" />
                            </div>
                         <Col> 
                         <Card bg="dark" className="mb-2" text="light" border="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="col text-center">Description</Card.Title>
                                <Card.Text>
                                    <h6>Height: {altura}</h6>
                                    <h6>Weight: {peso}</h6>
                                    <h6>Base Experience: {experiencia}</h6>
                                    <h6>Order: {orden}</h6>
                                    <h6>Specie: {especie}</h6>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    <Card bg="dark" text="light" border="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="col text-center">Abilities</Card.Title>
                                <Card.Text>
                                {habilidades.map((habilidad) => {
                                    return(
                                        <h6>{habilidad.ability.name}</h6>
                                    )
                                 })}
                                </Card.Text>
                            </Card.Body>
                    </Card>                               
                      </Col>
                    </Row>
                </Container>
  
               
                <Link to ="/">
                            <div className="col text-center">
                                <Button variant="outline-light">
                                    Inicio
                                </Button>
                            </div>
                </Link> 
                <row>
                    <col></col>
                </row>

            </Container> 

            
        );
    
}

export default DetallePokemon
