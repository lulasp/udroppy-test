import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Option from './Option';

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            options: [],
        };
        this.handleAddOptionComponent = this.handleAddOptionComponent.bind(this);
    }
    //handleClick show component, increase count. 
    handleAddOptionComponent() {
        console.log('Click happened');
        let options = this.state.options;
        if (options.length <= 2) {
            options.push(
                <Col>
                <Option />
                </Col>
            )
            this.setState({
                count: this.state.count + 1,
                options: options,
            });
        }
    }
    render() {
        let count = this.state.count;
        let options = this.state.options;

        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span>Options</span>
                        <div>
                            <Button onClick={() => this.handleAddOptionComponent()} variant="secondary">+</Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info">UP</Button>
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                {options}
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
