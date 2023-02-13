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
        <div className='p-2'>
        <h1>
            Search for Movie, Show or Actor
        </h1>

        </div>
            <Container fluid className=" text-center">
                <Row className='text-center'>
                    <Col sm={10} className="p-2 text-center">
                        <Form.Group className="" >
                            <Form.Control className="text-center" value={props.search} type="text" onChange={onChangeHandler} />
                        </Form.Group>
                    </Col>

                    <Col  sm={2} className="p-2" >
                        {/* <div className="col m-2 justify-left"> */}
                            <Button style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} onClick={props.getSearch} className="">Search</Button>
                        {/* </div> */}

                    </Col>

                </Row>


            </Container>
        </>
    )
}