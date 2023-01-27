import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

export default function SearchBox() {
    return (
        <>
            <Container className="m-2">
                <Form className='text-center'>
                    <Row className='text-center'>
                        <Col className="text-center">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Search for Movie, TV Show, or Actor" />

                            </Form.Group>
                        </Col>

                        <Col xs lg="2">
                            <div className="col justify-left">
                                <Button type="submit" className="btn btn-primary">Submit</Button>
                            </div>

                        </Col>

                    </Row>
                </Form>

            </Container>
        </>
    )
}