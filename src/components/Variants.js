import React from 'react';
import { Accordion, Card, Table, Button } from 'react-bootstrap';
import { FaPlus, FaArrowUp } from 'react-icons/fa'
import generateUUID from './GenerateUUID';
import Variant from './Variant';
import { connect } from 'react-redux';

const Variants = ({ variants = [], addVariant }) => {

    const handleClick = () => {
        addVariant(generateUUID());
    }

    return (
        <Accordion defaultActiveKey="0">
            <Card style={{ width: '100%' }}>
                <Card.Header className="d-flex justify-content-between">
                    <span className="cardTitle">Variants</span>
                    <div>
                        <Button variant="secondary" onClick={handleClick} ><FaPlus /></Button>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Button variant="info"><FaArrowUp /></Button>
                        </Accordion.Toggle>
                    </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Image</th>
                                    <th>HERE GOES OPTIONS</th>
                                    <th>Price</th>
                                    <th>Weight</th>
                                    <th>SKU</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {variants.map((variant) => {
                                    return <Variant id={variant.id} />
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

const mapStateToProps = (state) => {
    return {
        variants: state.variants
    }
}
const mapDispatchToProps = (dispatch) => ({
    addVariant: (id) => { dispatch({ type: 'ADD_VARIANT', value: { id: id } }) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Variants)
