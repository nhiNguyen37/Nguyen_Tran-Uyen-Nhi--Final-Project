import  './App.css'
import {ProgressBar } from 'react-bootstrap';
import React from 'react'
import { Jumbotron,Container } from 'react-bootstrap';
import {  Row, Col, Button} from 'reactstrap'

function About() {
    return (
    
    <Container className="AbContainer">
      <Jumbotron className ="aboutMe">
        <main className="about_text">

        <header>
        <h2 className='about'><b>About Me</b> </h2>
        <br>
        </br>
        </header>

        <p>Hello, my name is Tran Uyen Nhi Nguyen. I'm currently senior student in Finance at York University.</p> 
        <p>I started to create a few of eCommerce websites with the help Wordpress during my free time of my third year at school. Then, I quickly found out that I'm more into creating plugins and building websites than doing financial analysis.</p> 
        <p>I always want to challenge myself, discover what I can actually do and see how far I can go in this path.</p>
        <p>Therefore, this year, I decide to take Fullstack Web Development program in order to gain insight more into how a website is actually built and maintained.</p>
        <p>I have no background in Computer Science, Technology or Design but I'm constantly learning new things and currently gaining more experience as well as challenging myself with things include MongoDB, React, Express JS, and Node JS. </p>
        <p>My latest project is JQuery to-do-list app. Check it out <a href="https://github.com/nhiNguyen37/Nguyen_Tran-Uyen-Nhi--assignment-2" target="_blank" rel="noopener noreferrer">here</a>, or on the portfolio page.</p>
        <p> For more information?</p>

        <Button color="warning" Text style={{color: 'black'}} href="/contact">Contact Me</Button>

      </main>

      </Jumbotron>

        <footer className="footer">
          <br>
          </br>
        < h2 className='about'><b> Hobbies</b> </h2>

        <div className ="hobTable">
          <Row className="my-5">
                <Col lg="2">
                </Col>
                  <Col lg="8">
                  <ProgressBar now={90} animated striped variant="danger" label={`Music 90%`} />
               </Col>
          </Row>

            <Row className="my-5">
                <Col lg="2">
                </Col>

              <Col lg="8">
                  <ProgressBar now={70} animated striped variant="info"label={`Coding 70%`} />
                </Col>
              </Row>

              <Row className="my-5">
                <Col lg="2">
                </Col>

               <Col lg="8">
                <ProgressBar now={65} animated striped variant="warning" label={`Lego 65%`} />
             </Col>
            </Row>

            <Row className="my-5">
                <Col lg="2">
                </Col>
            <Col lg="8">
                <ProgressBar now={55} animated striped variant="success" label={`Travelling 55%`}/>
           </Col>
         </Row>

      </div>
      <br>
      </br>
      </footer>
      </Container>
    )}

export default About;