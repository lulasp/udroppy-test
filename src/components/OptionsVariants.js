import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Options from './Options';
import Variants from './Variants';
import { FaArrowUp } from 'react-icons/fa'

export default class OptionsVariants extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between"><span className="cardTitle">Options/Variants</span>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Button variant="info"><FaArrowUp /></Button>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Options />
                            <Variants />
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="d-flex justify-content-between">
                        <Button variant="primary">Hide/Show Variants</Button>
                        <Button variant="success">Save Product</Button>
                    </Card.Footer>
                </Card>
            </Accordion>
        )
    }
}
