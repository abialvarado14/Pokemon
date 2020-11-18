import React from 'react';
import { Card, Button} from 'react-bootstrap';
import pokeball from './pokeball.png';
import './Pokemon.css';

export default class Pokemon extends React.Component{

    render() {

        return (
            
            <Card border="warning" bg="dark" text="white">
                    <Card.Body>
                        <Card.Title>
                            Nombre del Pokemón
                            <Button className="float-right" variant="outline-warning"><img src={pokeball} className="pokeball" alt="pokeball" />
                                Información
                            </Button>
                        </Card.Title>
                        
                    </Card.Body>
            </Card>

            
        );
    }

}