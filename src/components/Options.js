import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Option from './Option';

export default class Options extends Component {

    //handleClick
    addOptionComponent() {
        console.log('Click happened');
    }
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span>Options</span>
                        <div>
                            <Button onClick={() => this.addOptionComponent()} variant="secondary">+</Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info">UP</Button>
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Option />
                                </Col>
                                <Col>
                                    <Option />
                                </Col>
                                <Col>
                                    <Option />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
