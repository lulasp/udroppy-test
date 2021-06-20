import React, { createRef } from 'react';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FaBarcode, FaWeightHanging, FaDollarSign, FaTimes } from 'react-icons/fa'
import FileUpload from './FileUpload';
import { connect } from 'react-redux';


const Variant = ({ updateVariant, removeVariant, id }) => {
    const userName = createRef();
    const priceRef = createRef();
    const weightRef = createRef();
    const skuRef = createRef();

    const handleKeyUp = () => {
        const valuesToSend = {
            id: id,
            userName: userName.current.value,
            price: priceRef.current.value,
            weight: weightRef.current.value,
            sku: skuRef.current.value,
        };
        updateVariant(valuesToSend);
    }

    const handleRemove = () => {
        removeVariant(id);
    }


    return (
        <tr onKeyUp={handleKeyUp}>
            <td>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><FaBarcode /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={userName}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </td>
            <td><FileUpload /></td>
            <td>
                <Form.Control as="select" defaultValue="----">
                    <option>-----</option>
                    <option>...</option>
                </Form.Control>
            </td>
            <td>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text><FaDollarSign /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={priceRef}
                        placeholder="Insert a price"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
            </td>
            <td>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text><FaWeightHanging /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={weightRef}
                        placeholder="Insert a Weight"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
            </td>
            <td>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text><FaBarcode /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={skuRef}
                        placeholder="Es: name-"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
            </td>
            <td><Button variant="warning" onClick={handleRemove}><FaTimes /></Button></td>
        </tr>
    )
}

const mapStateToProps = (state) => {
    return {
        variants: state.variants
    }
}
const mapDispatchToProps = (dispatch) => ({
    addVariant: (variantValue) => { dispatch({ type: 'ADD_VARIANT', value: variantValue }) },
    updateVariant: (variantValue) => { dispatch({ type: 'UPDATE_VARIANT', value: variantValue }) },
    removeVariant: (id) => { dispatch({ type: 'REMOVE_VARIANT', value: id }) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Variant)
