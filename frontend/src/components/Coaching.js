import React from "react";
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Coaching=()=>{
  const history=useNavigate();
    return(
        <div className="container">
            <div className="row">
            <div className="col-sm">
                <figure style={{textAlign:'center'}}>
                <img className="center" style={{marginTop:'40px', height: '150px',width: '150px',borderRadius: '50%',borderColor: 'darkgreen'}} src="data:image/png;base64,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"></img>
                <figcaption style={{color:'darkgreen',fontWeight:'bold'}}>Profile Picture</figcaption>
                <Button onClick={()=>{history("/offered")}} variant="success" type="submit" style={{marginBottom:'50px',marginTop:'50px',width:'250px',height:'100px',borderColor:'darkgreen',borderRadius:'4%',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 1.0)'}}>
   <span style={{fontSize:'150%',fontFamily:'sans-serif'}}>Explore Courses</span>
  </Button>
                </figure>
            </div>
            <div className="col-sm">
            <h1 style={{textAlign:"center",marginTop:'20px'}}>Coaching Details</h1>
            <Form style={{marginTop:"2%"}}>
  <Form.Group className="mb-3">
    <Form.Label>Coaching Name</Form.Label>
    <Form.Control type="text" placeholder="coaching name" style={{borderColor:"darkgreen"}}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="address" style={{borderColor:"darkgreen"}}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="phone number" style={{borderColor:"darkgreen"}}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Coaching Information</Form.Label>
    <Form.Control type="text" placeholder="coaching information" style={{borderColor:"darkgreen"}}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Teacher Details</Form.Label>
    <Form.Control type="text" placeholder="Teacher Details" style={{borderColor:"darkgreen"}}/>
  </Form.Group>
  <div style={{textAlign:'center'}}>
  <Button variant="success" type="submit" style={{marginBottom:'100px'}}>
    Submit
  </Button>
  </div>
</Form>
</div>
</div>
        </div>
    )
}

export default Coaching;