import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import SummaryText from '../SummaryText/SummaryText';

export default function SearchResult(props) {
    const [display, setDisplay] = useState("I have not seen this")
    const [seen, setSeen] = useState()
    
    let searchImg = `https://image.tmdb.org/t/p/original/${props.result.backdrop_path}`
    let mwID = props.result.id
    let title
    let summary
    let haveSeen
    
    let mwMediaType = props.result.media_type
    let mwTitle = props.result.title
    let mwName = props.result.name
    let mwHaveSeen = seen
    
    if (props.result.backdrop_path) {
        searchImg = `https://image.tmdb.org/t/p/original/${props.result.backdrop_path}`
    } else if (props.result.profile_path) {
        searchImg = `https://image.tmdb.org/t/p/original/${props.result.profile_path}`
    }

    if (props.result.overview) {
        summary = props.result.overview
    } else if (props.result.known_for_department) {
        summary = "Known for their " + props.result.known_for_department
    } else {
        summary = "no info available"
    }

    if (props.result.title) {
        title = props.result.title
    } else {
        title = props.result.name
    }

    const handleChange = (e) => {
        haveSeen = e.target.checked
        console.log(haveSeen)
        if (haveSeen) {
            setDisplay("I have seen this",)
            setSeen(true)

        } else {
            setDisplay("I have not see this")
            setSeen(false)
        }
        return (haveSeen)
    }

    mwName = mwName || mwTitle

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
                    {/* <DetailModal/> */}
                </Card.Body>
                <Card.Body>
                    {/* <SeenSwitch
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    result={props.result}
                    mwMediaType={mwMediaType}
                    /> */}

                    {/* <Form> */}
                    <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle,  mwHaveSeen)}>Add to MyWatch </Button>
                    {mwMediaType !== "person" &&
                        <>
                            <Form.Check
                                onChange={e => handleChange(e)}
                                type="switch"
                                id="custom-switch"
                            />


                            <Form.Check.Label>{display}</Form.Check.Label>
                        </>
                    }

                    {/* </Form> */}
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>

            </Card>

        </>


    )
}