import React, { createRef, useState } from 'react';
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { FaPlus, FaArrowUp, FaTimes, FaMinus } from 'react-icons/fa'

const Option = ({ options, id }) => {
    const titleRef = createRef(`Option - ${id}`);
    const valuesRefs = [];

    const handleKeyUp = () => {
        const valuesToSend = {
            id,
            title: titleRef.current.value,
            values: [],
        };

        console.log('valuesRef', valuesRefs);
        // updateVariant(valuesToSend);
    }


    const setRef = (ref) => {
        console.log(valuesRefs);
        valuesRefs.push(ref);
    };

    return (
        <Accordion defaultActiveKey="0" onKeyUp={handleKeyUp}>
            <Card style={{ width: '100%' }}>
                <Card.Header className="d-flex justify-content-between">
                    <Row>
                        <Col>
                            <input
                                type="text"
                                className="optionHeading"
                                ref={titleRef}
                                defaultValue={`Option ${id}`}
                                style={{ width: "50%" }}
                            />
                            <Button variant="warning" className="optionRemove"><FaTimes /></Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="optionUp">
                                <Button variant="info"><FaArrowUp /></Button>
                            </Accordion.Toggle>
                        </Col>
                    </Row>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            {options.length ? (
                                options.map((option, i) => {
                                    return (
                                        <Col>
                                            <input
                                                type="text"
                                                className="optionValue"
                                                ref={setRef}
                                                defaultValue={`Value ${i}`}
                                                style={{ width: "70%" }}
                                            />
                                            <Button variant="warning"><FaMinus /></Button>
                                        </Col>
                                    )
                                })

                            ) : (
                                <div className="center">Add an option</div>
                            )}
                        </Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="secondary"><FaPlus /></Button>
                </Card.Footer>
            </Card>
        </Accordion>
    )
}

const mapStateToProps = (state) => {
    return {
        options: state.options
    }
}
const mapDispatchToProps = (dispatch) => ({
    addOption: (value) => { dispatch({ type: 'ADD_OPTION', value: value }) },
    updateOption: (value) => { dispatch({ type: 'UPDATE_OPTION', value: value }) },
    removeOption: (id) => { dispatch({ type: 'REMOVE_OPTION', value: id }) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Option);