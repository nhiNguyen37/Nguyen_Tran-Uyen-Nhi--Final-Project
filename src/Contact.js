import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button} from 'reactstrap'
import { Container } from 'reactstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'


function Contact() {

     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [phoneNumber, setPhoneNumber] = useState("")
     const [content, setContent] = useState("")
 
     const formSubmit = async event => {

         event.preventDefault()
         const response = await fetch('http://localhost:4000/contact_forms/entries', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify({name, email, phoneNumber, content})
         })

         const payload = await response.json()
         if (response.status >= 400) {
             alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
         } else {
             alert(`Congrats! Submission submitted with id: ${payload.id}`)
         }
     }
 
     return (

        <Jumbotron fluid className="aboutMe">
            
         <Container>
             <h1 className='contactForm'>Contact Form</h1>
             <Form className="my-5" onSubmit={formSubmit}>
                 <FormGroup row>
                     <Label for="emailEntry" sm={2}>Email</Label>
                     <Col sm={10}>
                     <Input type="email" name="email" id="emailEntry" placeholder="Enter Email"  required value={email} onChange={e => setEmail(e.target.value) }/>
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label for="phoneEntry" sm={2}>Phone Number</Label>
                     <Col sm={10}>
                     <Input type="phoneNumber" name="phoneNumber" id="phoneEntry" placeholder="Enter Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label for="nameEntry" sm={2}>Name</Label>
                     <Col sm={10}>
                     <Input type="name" name="name" id="nameEntry" placeholder="Enter Full Name" required value={name} onChange={e => setName(e.target.value)}/>
                     </Col>
                 </FormGroup>
 
                 <FormGroup row>
                     <Label for="messageEntry" sm={2}>Message</Label>
                     <Col sm={10}>
                     <Input type="textarea" name="content" id="messageEntry" placeholder="Write something..." required value={content} onChange={e => setContent(e.target.value)}/>
                     </Col>
                 </FormGroup>
                 <FormGroup check row>
                     <Col sm={{ size: 10, offset: 2 }}>
                     <Button color="danger" Text style={{color: 'black'}} >Submit</Button>
                     </Col>
                 </FormGroup>
             </Form>
         </Container>
         </Jumbotron>
       )
}

export default Contact;