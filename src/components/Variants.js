import React, { Component } from 'react';
import { Accordion, Card, Table, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaBarcode, FaWeightHanging, FaDollarSign, FaTimes, FaPlus, FaArrowUp } from 'react-icons/fa'
import FileUpload from './FileUpload';


export default class Variants extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span className="cardTitle">Variants</span>
                        <div>
                            <Button variant="secondary" ><FaPlus /></Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info"><FaArrowUp /></Button>
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Product Code</th>
                                        <th>Image</th>
                                        <th>HERE GOES OPTIONS</th>
                                        <th>Price</th>
                                        <th>Weight</th>
                                        <th>SKU</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1"><FaBarcode /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </td>
                                        <td><FileUpload /></td>
                                        <td>
                                            <Form.Control as="select" defaultValue="----">
                                                <option>-----</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FaDollarSign /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Insert a price o"
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FaWeightHanging /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Insert a Weight"
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FaBarcode /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Es: name-"
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                            </InputGroup>
                                        </td>
                                        <td><Button variant="warning"><FaTimes /></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
