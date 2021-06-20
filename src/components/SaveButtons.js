import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function SaveButtons() {
    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <Button variant="primary">Hide/Show Variants</Button>
                <Button variant="success" type="submit">Save Product</Button>
            </Card.Header>
        </Card>
    )
}
