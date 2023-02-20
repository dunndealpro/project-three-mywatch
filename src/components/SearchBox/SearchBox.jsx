import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

export default function SearchBox(props) {
    
    const onChangeHandler = e => {
        e.preventDefault();
        { props.setSearch(e.target.value) };
    }

    return (
        <>
            <div className='p-2'>
                <h1>Search for Movie, Show or Actor</h1>
            </div>
            <Container fluid className=" text-center">
                <Row className='text-center'>
                    <Col md={10} sm={10} className="mx-auto p-2 text-center">
                        <Form.Group className="" >
                            <Form.Control className="text-center" value={props.search} type="text" onChange={onChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Button className="mx-auto mb-2 w-50" style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }} onClick={props.getSearch}>Search</Button>
                </Row>
            </Container>
        </>
    )
}