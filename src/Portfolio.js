import './App.css';
import React from 'react'
import Carousel from './components/Carousel'
import 'react-slideshow-image/dist/styles.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col, Button, CardBody, CardTitle, CardFooter, Card } from 'reactstrap'

function Portfolio() {

    return (

        <Container>
        <div>
            <Carousel />
        </div>
        <Jumbotron fluid>
        <Row>
            <Col md="4" className="mb-5">
                <Card>
                    <CardBody>
                        <CardTitle><h2 className="project">Project 1: Enhancing website speed</h2></CardTitle>
                        <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                    </CardBody>
                    <CardFooter>
                        <Button color="danger" size="sm" Text style={{color: 'black'}} href="https://github.com/nhiNguyen37/Nguyen_Tran-Uyen-Nhi--assignment-2" target="_blank" rel="noopener noreferrer">Click Here</Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="4" className="mb-5">
                <Card>
                    <CardBody>
                        <CardTitle><h2 className="project">Project 2: Creating To-Do-List app using JQuery</h2></CardTitle>
                        <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                    </CardBody>
                    <CardFooter>
                        <Button color="danger" size="sm" Text style={{color: 'black'}} href="https://gitlab.com/etnguyen37/fs1000-individuale-project" target="_blank" rel="noopener noreferrer">Click Here</Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="4" className="mb-5">
                <Card>
                    <CardBody>
                        <CardTitle><h2 className="project">Project 3: Encoding My Chemical Romance's song "Dischanted"</h2></CardTitle>
                        <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                    </CardBody>
                    <CardFooter>
                        <Button color="danger" size="sm" Text style={{color: 'black'}} href="https://github.com/nhiNguyen37/Nguyen_Tran-Uyen-Nhi--assignment-2" target="_blank" rel="noopener noreferrer">click Here</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Jumbotron>
    </Container>
    )
}

export default Portfolio;