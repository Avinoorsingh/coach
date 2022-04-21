import React from "react";
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Courses=()=>{
    const history=useNavigate();
    return(
        <div>
            <div style={{padding:'10px',marginBottom:'50px'}}>
            <CardGroup>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 1</Card.Title>
      <Card.Text>
        Physics
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course2")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 2</Card.Title>
      <Card.Text>
        Chemistry
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course3")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 3</Card.Title>
      <Card.Text>
      Mathematics
      </Card.Text>
    </Card.Body>
  </Card>
  </CardGroup>
  <CardGroup>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course4")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 4</Card.Title>
      <Card.Text>
      English
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course5")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 5</Card.Title>
      <Card.Text>
      Hindi
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course6")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 6</Card.Title>
      <Card.Text>
      Computer Science
      </Card.Text>
    </Card.Body>
  </Card>
  </CardGroup>
  <CardGroup>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course7")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 7</Card.Title>
      <Card.Text>
      Python
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course8")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 8</Card.Title>
      <Card.Text>
      Data Structures
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card1" style={{margin:'10px',border:'0.5px solid black',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.5)'}} onClick={()=>{history("/course9")}}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Course 9</Card.Title>
      <Card.Text>
      Full Stack Development
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</div>
        </div>
    )
}

export default Courses;