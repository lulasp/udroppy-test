import React from 'react';
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Option from './Option';
import generateUUID from './GenerateUUID';
import { FaPlus, FaArrowUp } from 'react-icons/fa'


const Options = ({ options = [], addOption }) => {

  const handleClick = () => {
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
                      <Option option={option} id={i} optionId={option.id} />
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
    addOption: (id) => { dispatch({ type: 'ADD_OPTION', value: { id: id } }) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Options)