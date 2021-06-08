import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Option extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span>Option</span>
                        <div>
                            <Button variant="secondary">+</Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info">UP</Button>
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
