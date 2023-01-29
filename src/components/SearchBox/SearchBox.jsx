import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from "react"

export default function SearchBox(props) {

    

    const onChangeHandler = e => {
        e.preventDefault();
        { props.setSearch(e.target.value) };
    }

    return (
        <>
        <div className='mt-5'>
        <h1>
            Search for Movie, Show or Actor
        </h1>
            <Container className="m-2">
                <Row className='text-center'>
                    <Col className="text-center">
                        <Form.Group className="mb-3" >
                            <Form.Control value={props.search} type="text" onChange={onChangeHandler} />
                        </Form.Group>
                    </Col>

                    <Col xs lg="2">
                        <div className="col justify-left">
                            <Button onClick={props.getSearch} className="">Submit</Button>
                        </div>

                    </Col>

                </Row>


            </Container>

        </div>
        </>
    )
}