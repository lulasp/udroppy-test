import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Options from './Options';
import Variants from './Variants';

export default class OptionsVariants extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between"><span>Options/Variants</span>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Button variant="info">UP</Button>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Options />
                            <Variants />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
