import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardFooter, Card } from 'reactstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Home() {
    return (
        <Container>
        <Jumbotron flluid className="aboutMe">
        <Row className="my-5">
                <Col lg="7">
                    <img className="homeImage" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80" alt="" height="600px" width="100%"/>
                </Col>
        <Col lg="5">
            <h2 className="hero-text">Welcome To Nhi's Website</h2>
            <br></br>
            <p className="hero-subtext">Projects the make a difference...</p>
            <Button color="info" className="hero-button" href="/about" Text style={{color: 'black'}}>About Me</Button>
        </Col>
    </Row>
    </Jumbotron>
    
    <Jumbotron flluid className="aboutMe">
    <Row>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 1</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                    <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="/portfolio"  >See More</Button>
                </CardFooter>
            </Card>
        </Col>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 2</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                    <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="/portfolio">See More</Button>
                </CardFooter>
            </Card>
        </Col>
        <Col md="4" className="mb-5">
            <Card>
                <CardBody>
                    <CardTitle><h2 className="project">Project 3</h2></CardTitle>
                    <img className="card-img-top" width="50px" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"></img>
                    <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime</CardBody>
                </CardBody>
                <CardFooter>
                <Button className="button" color="danger" size="sm" Text style={{color: 'black'}} href="/portfolio">See More</Button>
                </CardFooter>
            </Card>
        </Col>
    </Row>
    </Jumbotron>
</Container>
)
  }

export default Home;