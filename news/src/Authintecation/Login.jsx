import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContextProbider';

const Login = () => {

    const {login}=useContext(AuthContext)

    const navigate = useNavigate();

    // This is Location set,Login before this path is location set
    const location = useLocation()
    const from = location.state?.from?.pathname|| '/newsdata1/0';
    // Loction set end

//from Handler working start

    const fromSubmitHandler = (event) =>{
         event.preventDefault()
         const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email,password)


         
         //Firbase working start
           login(email,password)
             .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
      event.target.reset()
    // ...
    navigate(from,{replace:true})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
         //Firbase working End
    }
    //from Handler working end
  
    return (
              <Container className='w-25 mx-auto'>
        <h3 className='text-center'>Please Login</h3>
                 <Form onSubmit={fromSubmitHandler}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id='email' placeholder="Enter email" />
  
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id='password' placeholder="Password" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className='text-success'>
        Don't have an Account ? <Link to="/Register">Register</Link>
      </Form.Text>
    </Form>
       </Container>
    );
};

export default Login;