import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Option from './Option';

class Options extends Component {
        //@TODO:Create handleClick
        // handleClick = () => {
        //   this.props.addOption(this.props.option.id);
        // }
render(){
  //console.log(this.props)
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
                        <span>Options</span>
                        <div>
                            <Button variant="secondary">This+</Button>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button variant="info">UP</Button>
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
  

export default connect(mapStateToProps)(Options)