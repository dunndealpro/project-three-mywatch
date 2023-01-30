import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';


export default function SearchResult(props) {

    let searchImg = `https://image.tmdb.org/t/p/original/${props.result.backdrop_path}`
    let selectId = props.result.id
    let title

    if (props.result.title) {
        title = props.result.title
    } else {
        title = props.result.name
    }

    let summary = props.result.overview

    let isChecked 

    const handleChange = (e) => {
        isChecked = e.target.checked
        console.log(isChecked)
    }

   

    return (
        <>


            <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Title className="m-2">{title}</Card.Title>
                <Card.Img variant="none" src={searchImg} />
                <Card.Body>


                    {/* <Card.Title>{props.results.title}</Card.Title> */}
                    <Card.Text>
                        <SummaryText
                            searchSummary={summary}
                        />
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Form>
                        <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(selectId, title)}>Add to MyWatch </Button>
                        <Form.Check
                            onChange={e => handleChange(e)}
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                        />

                    </Form>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>

            </Card>

        </>


    )
}