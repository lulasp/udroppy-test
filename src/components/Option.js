import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            optionValues: [],
        };
        this.handleOptionValueField = this.handleOptionValueField.bind(this);
        this.handleOptionValueChange = this.handleOptionValueChange.bind(this);
    }
    //handleClick show component, increase count. 
    handleOptionValueField() {
        console.log('add value field');
        let optionValues = this.state.optionValues;
        let count = "Value " + this.state.count;
        if (optionValues.length <= 2) {
            optionValues.push(
                <Col>
                    <input
                        type="text"
                        className="optionValue"
                        style={{ width: "70%" }}
                        value={count}
                        onChange={this.handleOptionValueChange}
                    />
                    <Button variant="warning">-</Button>
                </Col>
            )
            this.setState({
                count: this.state.count + 1,
                optionValues: optionValues,
            });
        }
    }

    handleOptionValueChange(event){
        console.log('value has changed');
    }
    render() {
        let optionValuesField = this.state.optionValues;
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="optionHeading"
                                    value="Option 0"
                                    style={{ width: "50%" }}
                                />
                                <Button variant="warning">X</Button>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Button variant="info">UP</Button>
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {optionValuesField}
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="d-flex justify-content-end">
                        <Button variant="secondary" onClick={() => this.handleOptionValueField()}>+</Button>
                    </Card.Footer>
                </Card>
            </Accordion>
        )
    }
}
