import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


export default function SearchResult(props) {

    const [display, setDisplay] = useState("I have not seen this")
    const [seen, setSeen] = useState()

    let searchImg = `https://image.tmdb.org/t/p/original/${props.result.backdrop_path}`
    let mwID = props.result.id
    let title
    let summary = props.result.overview
    let haveSeen

    let mwMediaType = props.result.media_type
    let mwTitle = props.result.title
    let mwName = props.result.name
    

    if (props.result.title) {
        title = props.result.title
    } else {
        title = props.result.name
    }

    const handleChange = (e) => {
        haveSeen = e.target.checked
        console.log(haveSeen)
        if (haveSeen) {
            console.log("true? ", haveSeen)
            setDisplay("I have seen this",)
            setSeen(true)

        } else {
            setDisplay("I have not see this")
            setSeen(false)
        }
        console.log("State: ", display)
        console.log("haveSeen? ", haveSeen)
        return( haveSeen)
    }

    let mwHaveSeen =seen
    

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
                    {/* <Form> */}
                        <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(mwID, mwMediaType, mwTitle, mwName,mwHaveSeen)}>Add to MyWatch </Button>
                        <Form.Check
                            onChange={e => handleChange(e)}
                            type="switch"
                            id="custom-switch"                           
                        />
                        <Form.Check.Label>{display}</Form.Check.Label>

                    {/* </Form> */}
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>

            </Card>

        </>


    )
}