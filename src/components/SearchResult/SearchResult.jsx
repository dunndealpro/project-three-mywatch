import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function SearchResult(props) {

    let searchImg = `https://image.tmdb.org/t/p/original/${props.result.backdrop_path}`
    let title

    if (props.result.title) {
        title = props.result.title
    } else {
        title = props.result.name
    }

    let summary = props.result.overview

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
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>

            </Card>
        
        </>


    )
}