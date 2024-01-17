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
            <CardTitle tag="h5">Add Project</CardTitle>
         </CardHeader>
         <CardBody>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Project Name</label>
                     <Input
                        defaultValue=""
                        placeholder="Company"
                        type="text"
                        name="firstname"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                  <FormGroup>
                     <label>Created Date</label>
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
                     Team Name
                     </label>
                     <Input placeholder="team name" type="email" name="email"
                        onChange={handleInput}/>
                  </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Team Leader</label>
                     <Input
                        defaultValue=""
                        placeholder="Team Leader"
                        type="names"
                        name="password"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col className="pr-1" md="4">
                  <FormGroup>
                     <label>Expected Competion Date</label>
                     <Input
                        defaultValue=""
                        placeholder="Company"
                        type="date"
                        name="company"
                        onChange={handleInput}
                        />
                  </FormGroup>
                  </Col>
                  <Col md="4">
                  <FormGroup>
                     <label>Project Progress</label>
                     <Input
                        defaultValue=""
                        placeholder="Progress"
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
                  <div className="update ml-auto mr-auto">
                     <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        >
                     Add New Project
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
                      <th>Project Name</th>
                      <th>Created Date</th>
                      <th>Team</th>
                      <th>Team Leader</th>
                      <th>Expected Date</th>
                      <th>Project Progress Date</th>


                      <th >Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Project One</td>
                      <td>2023/01/01</td>
                      <td>A</td>
                      <td>John</td>
                      <td>2022/06/11</td>
                      <td>60%</td>
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
                      <td>Project One</td>
                      <td>2023/01/01</td>
                      <td>B</td>
                      <td>Gon</td>
                      <td>2022/06/11</td>
                      <td>70%</td>
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
                      <td>Project Three</td>
                      <td>2023/01/01</td>
                      <td>C</td>
                      <td>Killua</td>
                      <td>2022/06/11</td>
                      <td>90%</td>
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