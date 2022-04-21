import React,{ useState,useEffect} from "react";
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
  const history=useNavigate();
  const initialValues = {email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const submitform=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values)=>{
      const errors={};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required!";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
    return(
        <div>
           {Object.keys(formErrors).length === 0 && isSubmit ? (
            history("/coaching")
          ) : (
            <pre></pre>
          )}
            <h1 style={{textAlign:'center',marginTop:'15px'}}><span style={{color:'lightgreen'}}>Coach</span><span style={{color:'dodgerblue'}}>Budy</span> <span style={{color:'lightgreen'}}>Lo</span><span style={{color:'dodgerblue'}}>gin</span></h1>
            <div className="container" style={{maxWidth:'500px'}}>
           <Form style={{marginTop:"5%"}} onSubmit={submitform}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email" style={{borderColor:"darkgreen"}} autoComplete="off" value={formValues.email} onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <p>{formErrors.email}</p>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" style={{borderColor:"darkgreen"}} autoComplete="off" value={formValues.password} onChange={handleChange}/>
  </Form.Group>
  <p>{formErrors.password}</p>
  <div style={{textAlign:'center'}}>
  <Button variant="success" type="submit" >
    Submit
  </Button>
  </div>
</Form>
</div>
        </div>
    )
}

export default Login;