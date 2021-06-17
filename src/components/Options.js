import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Option from './Option';
import { addOption } from '../actions/optionActions';
import { FaPlus, FaArrowUp } from 'react-icons/fa'

class Options extends Component {
        //@TODO:Create handleClick
        handleClick = () => {
         // this.props.addOption(this.props.option.id);
         console.log('this was clicked');
         this.props.addOption();
        }
render(){
  console.log(this.props)
        const { options } = this.props;
        const optionsList = options.length ? (
            options.map(option => {
              return (
            <Col>
            <Option option={option} />
            </Col>
              )
            })
          ) : (
            <div className="center">No options to show</div>
          );

        return (
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '100%' }}>
                    <Card.Header className="d-flex justify-content-between">
                        <span className="cardTitle">Options</span>
                        <div>
                            <Button variant="secondary" onClick={this.handleClick}><FaPlus /></Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info"><FaArrowUp /></Button>
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                {optionsList}
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
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

  const mapDispatchToProps = (dispatch) => {
    return {
      //deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
        addOption: () => {dispatch(addOption())},
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Options)