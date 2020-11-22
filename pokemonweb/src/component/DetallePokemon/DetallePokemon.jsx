import React, {useEffect, useState} from 'react';
import logopokemon from '../Home/logopokemon.png';
import { Jumbotron, Container, Button, Card, Row, Col, Badge, Carousel, Spinner} from 'react-bootstrap';
import { Link, useParams} from 'react-router-dom';
import './DetallePokemon.css';


const DetallePokemon = () => {

    const[ imagenT, setImagenT] = useState(null) //Referencia a back_default
    const[imagenF, setImagenF] = useState(null) //Referencia a front_default
    const[imagenFS, setImagenFS] = useState(null) //Referencia a front_shiny_default
    const[imagenBS, setImagenBS] = useState(null) //Referencia a back_shiny_default   
    const[imagenDF, setImagenDF] = useState(null) // Referencia a front_default de dream_world
    const[imagenOmegaSh, setImagenOmegaSh] = useState(null) //Referencia a front_shiny de en omegaruby-alphasapphire
    const[imagenEM, setImagenEM] = useState(null) //Referencia a front_default emerald
    const[imagenEMS, setImagenEMS] = useState(null) //Referencia a front_shiny emerald
    const[imagenOmega, setImagenOmega] = useState(null) //Referencia a front_default en omegaruby-alphasapphire
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
    const[error, setError] = useState(false) // Identificar error al cargar la página
    

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
                setImagenFS(data.sprites.front_shiny)
                setImagenBS(data.sprites.back_shiny)
                setImagenDF(data.sprites.other.dream_world.front_default)
                setImagenEM(data.sprites.versions["generation-iii"].emerald.front_default)
                setImagenEMS(data.sprites.versions["generation-iii"].emerald.front_shiny)
                setImagenOmega((data.sprites.versions["generation-vi"])["omegaruby-alphasapphire"].front_default)
                setImagenOmegaSh((data.sprites.versions["generation-vi"])["omegaruby-alphasapphire"].front_shiny)
            })
            .catch(() => {setError(true)});

    }, []);


    if(error){
        return(
            <Container>
            <div className="outer-div">
                <div className="jumbotron-div">
                    <Jumbotron className="jumbo-boy mb-3" >
                        <h1>Registro </h1>
                        <img src={logopokemon} className="logo" alt="logo" />
                        <h5>¡No encontramos el pokemon solicitado, puedes encontrar otros o volver a intentar!</h5>
                        <Link to ="/">
                            <div className="col text-center">
                                <Button variant="outline-light">
                                    Inicio
                                </Button>
                            </div>
                        </Link> 
                    </Jumbotron>
                </div>

            </div>
          <br />
        </Container>       
        )
    }else if(peso==null){
        return(
            <Container>
            <div className="outer-div">
                <div className="jumbotron-div">
                    <Jumbotron className="jumbo-boy mb-3" >
                        <h1>Detalle Pokemón</h1>
                        <img src={logopokemon} className="logo" alt="logo" />
                        <h5>¡Encuentra la información de tu pokemón favorito!</h5>
                        <Spinner animation="grow" variant="warning" />
                    </Jumbotron>
                </div>

            </div>
          <br />
        </Container>       
        )
    }else{
        return (
            <Container>
                <div className="outer-div">
                    <div className="jumbotron-div">
                        <Jumbotron className="jumbo-boy" >
                            <h1>Detalle Pokemón </h1>
                            <img src={logopokemon} className="logo" alt="logo" />
                            <h5>¡Encuentra la información de tu pokemón favorito!</h5>
                            <div className="col text-center">
                        <h1>
                                <Badge className="mb-2" variant="light">{nombre}</Badge>
                        </h1>
                </div>
                        </Jumbotron>
                    </div>

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
                         <Col>
                         <div id="contenedor">
                            <img src={imagenDF} className="principal" alt="principal" />

                            </div>
                         </Col>                            
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
                                <Button variant="outline-light" size="lg">
                                    Inicio
                                </Button>
                            </div>
                </Link> 
 
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col>
                            <img
                                className="d-block w-30 media"
                                src={imagenF}
                                alt="media"
                            />
                            </Col>
                            <Col>
                            <img
                                className="d-block w-30 media"
                                src={imagenT}
                                alt="media"
                            />
                            </Col>

                            <Col>
                            <img
                                className="d-block w-30 media"
                                src={imagenFS}
                                alt="media"
                                />
                            </Col>
                            <Col>
                            <img
                                className="d-block w-30 media"
                                src={imagenBS}
                                alt="media"
                            />
                            </Col>
                        </Row>
                    
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                            <img
                                    className="d-block w-30 media"
                                    src={imagenOmega}
                                    alt="media"
                            />        
                            </Col>
                            <Col>
                            <img
                                    className="d-block w-30 media"
                                    src={imagenOmegaSh}
                                    alt="media"
                            />        
                            </Col>
                            <Col>
                            <img
                                    className="d-block w-30 eme"
                                    src={imagenEM}
                                    alt="media"
                            />        
                            </Col>
                            <Col>
                            <img
                                    className="d-block w-30 eme"
                                    src={imagenEMS}
                                    alt="media"
                            />        
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>            
        );
    }
    
}

export default DetallePokemon
