import React, { Component } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class Variants extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span>Variants</span>
                        <div>
                            <Button variant="secondary" >+</Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info">UP</Button>
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
                                        <th>Price</th>
                                        <th>Weight</th>
                                        <th>SKU</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
