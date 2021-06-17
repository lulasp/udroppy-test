import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { FaPlus, FaArrowUp, FaTimes, FaMinus } from 'react-icons/fa'

class Option extends Component {
    render() {
        //console.log(this.props);
        const optionValue = this.props.option.value;
        console.log(optionValue)
        const option = this.props.option ? (
            optionValue.map(value => {
                return (
                    <Col>
                    <input
                        type="text"
                        className="optionValue"
                        value={value}
                        style={{ width: "70%" }}
                    />
                    <Button variant="warning" onClick={() => this.removeOptionValueField()}><FaMinus /></Button>
                </Col>
                )
              })

          ) : (
            <div className="center">Add an option</div>
          );

        //let optionValuesField = this.state.optionValues;
        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="optionHeading"
                                    value={this.props.option.content}
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
                                {option}
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="d-flex justify-content-end">
                        <Button variant="secondary" onClick={() => this.handleOptionValueField()}><FaPlus /></Button>
                    </Card.Footer>
                </Card>
            </Accordion>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      options: state.options
    }
  }

export default connect(mapStateToProps)(Option)