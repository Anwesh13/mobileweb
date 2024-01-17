import React, { useState } from "react";
import {Link, useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';
// reactstrap components
import {
Button,
Card,
CardHeader,
CardBody,
CardFooter,
CardTitle,
FormGroup,
Form,
Input,
Row,
Col,
} from "reactstrap";
function User() {
  const [values, setValues] = useState({
      email : '',
      password: '',

  })

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/login', values)
    .then(res => {
      if (res.data.login){
        navigate('/')
      } else {
        alert("Login Successfull")
      }
      console.log(res);
    })
    .catch(err => console.log(err));
  }


return (
<>
<div className="content">
   <Row>
      <Col md="12">
      <Card className="card-user">
         <CardHeader>
            <CardTitle tag="h5">Login</CardTitle>
         </CardHeader>
         <CardBody>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Email</label>
                     <Input
                        defaultValue="John"
                        placeholder="Company"
                        type="email"
                        name="email"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label>Password</label>
                     <Input
                        defaultValue="Doe"
                        placeholder="Last Name"
                        type="text"
                        name="password"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <div className="update ml-auto mr-auto">
                     <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Login
                     </Button>
                  </div>
                 
               </Row>
            
            </Form>
         </CardBody>
      </Card>
      </Col>
   </Row>
</div>
</>
);
}
export default User;