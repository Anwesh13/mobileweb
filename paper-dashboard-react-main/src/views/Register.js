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
      firstname : '',
      lastname : '',
      password: '',
      email : '',
      company : '',
      address : '',
      city : '',
      country : '',
      code : '',


  })

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/user', values)
    .then(res => {
      console.log(res);
      navigate('admin/dashboard')
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
            <CardTitle tag="h5">Add New User</CardTitle>
         </CardHeader>
         <CardBody>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>First Name</label>
                     <Input
                        defaultValue="John"
                        placeholder="Company"
                        type="text"
                        name="firstname"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label>Last Name</label>
                     <Input
                        defaultValue="Doe"
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label htmlFor="exampleInputEmail1">
                     Email address
                     </label>
                     <Input placeholder="Email" type="email" name="email"
                        onChange={handleInput}/>
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Password</label>
                     <Input
                        defaultValue=""
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Company Name</label>
                     <Input
                        defaultValue=""
                        placeholder="Company"
                        type="text"
                        name="company"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                     <label>Address</label>
                     <Input
                        defaultValue=""
                        placeholder="Home Address"
                        type="text"
                        name="address"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
               </Row>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>City</label>
                     <Input
                        defaultValue="London"
                        placeholder="City"
                        type="text"
                        name="city"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                  <FormGroup>
                     <label>Country</label>
                     <Input
                        defaultValue="United Kingdom"
                        placeholder="Country"
                        type="text"
                        name="country"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label>Postal Code</label>
                     <Input placeholder="ZIP Code" type="text" name="code"
                        onChange={handleInput}/>
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <div className="update ml-auto mr-auto">
                     <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Register
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