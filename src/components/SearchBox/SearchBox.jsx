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
        <div className='text-center p-2'>
        <h1>
            Search for Movie, Show or Actor
        </h1>
            <Container className=" text-center">
                <Row className='text-center'>
                    <Col className="text-center">
                        <Form.Group className="" >
                            <Form.Control className="text-center" value={props.search} type="text" onChange={onChangeHandler} />
                        </Form.Group>
                    </Col>

                    <Col  lg="2">
                        <div className="col m-2 justify-left">
                            <Button size="sm" onClick={props.getSearch} className="">Search</Button>
                        </div>

                    </Col>

                </Row>


            </Container>

        </div>
        </>
    )
}