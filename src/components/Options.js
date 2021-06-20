import React, { Component } from 'react';
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Option from './Option';
import { addOption } from '../actions/optionActions';
import { FaPlus, FaArrowUp } from 'react-icons/fa'


const Options = ({ options = [], addOption }) => {
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const handleClick = () => {
    console.log('handle click')
    addOption(generateUUID());
  }
  return (
    <Accordion defaultActiveKey="0">
      <Card style={{ width: '100%' }}>
        <Card.Header className="d-flex justify-content-between">
          <span className="cardTitle">Options</span>
          <div>
            {options.length <= 2 &&
              <Button variant="secondary" onClick={handleClick}><FaPlus /></Button>
            }
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Button variant="info"><FaArrowUp /></Button>
            </Accordion.Toggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Row>
              {options.length ? (
                options.map((option, i) => {
                  return (
                    <Col>
                      <Option option={option} id={i} />
                    </Col>
                  );
                })) : (<div className="center">No options to show</div>)}
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    addOption: (id) => { dispatch({ type: 'ADD_OPTION', value: { id: id } }) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Options)