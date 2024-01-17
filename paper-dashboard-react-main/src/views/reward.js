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
Table
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
            <CardTitle tag="h5">Add Rewards</CardTitle>
         </CardHeader>
         <CardBody>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Person Name</label>
                     <Input
                        defaultValue=""
                        placeholder="Name"
                        type="text"
                        name="firstname"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label>Reward Date</label>
                     <Input
                        defaultValue=""
                        placeholder="date"
                        type="date"
                        name="lastname"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label htmlFor="exampleInputEmail1">
                     Company Name
                     </label>
                     <Input placeholder="Company name" type="email" name="email"
                        onChange={handleInput}/>
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Beenz</label>
                     <Input
                        defaultValue=""
                        placeholder="Team Leader"
                        type="names"
                        name="password"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
               </Row>
               <Row>
                  <div className="update ml-auto mr-auto">
                     <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Add Rewards
                     </Button>
                  </div>
               </Row>
            </Form>
         </CardBody>
      </Card>
      </Col>
      <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Project Lists</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Person Name</th>
                      <th>Reward Date</th>
                      <th>Company Name</th>
                      <th>Beenz</th>
                      <th >Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>2023/01/01</td>
                      <td>Stills ANd Feels</td>
                      <td>205</td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Edit
                     </Button></td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="secondary"
                        type="submit"
                        >
                     Delete
                     </Button></td>

                    </tr>
                    <tr>
                      <td>Ichigo Kurasaki</td>
                      <td>2023/08/17</td>
                      <td>Ribhu Tech</td>
                      <td>800</td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Edit
                     </Button></td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="secondary"
                        type="submit"
                        >
                     Delete
                     </Button></td>

                    </tr>
                    <tr>
                      <td>Killua GON</td>
                      <td>2023/08/10</td>
                      <td>Stills ANd Feels</td>
                      <td>605</td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Edit
                     </Button></td>
                      <td  className="text-right" type= "button">   <Button
                        className="btn-round"
                        color="secondary"
                        type="submit"
                        >
                     Delete
                     </Button></td>

                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
   </Row>
   
</div>
</>
);
}
export default User;