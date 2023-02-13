import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


export default function SeenSwitch(props) {

    const [seen, setSeen] = useState()
    const [display, setDisplay] = useState("I have not seen this")
    let haveSeen

    let mwMediaType
    let mwTitle
    let mwName
    let mwID

    let mwMediaTypeMw
    let mwTitleMw
    let mwNameMw
    let mwIDMw

    let person = "person"

    // console.log(props.posterUrl.media_type )

    // if (props.watchedDetails) {
    //     console.log("watchedDetails ", props.watchedDetails)
    //     mwMediaTypeMw = props.watchedDetails.media_type
    //     mwTitleMw = props.watchedDetails.title
    //     mwNameMw = props.watchedDetails.name
    //     mwIDMw = props.watchedDetails.id
    //     // console.log()

    //     console.log(mwIDMw)
    // console.log(mwNameMw)
    // console.log(mwTitleMw)
    // console.log(mwMediaTypeMw)
    // }

    if (props.posterUrl) {
        // console.log("from trending page")
        mwMediaType = props.posterUrl.media_type
        mwTitle = props.posterUrl.title
        mwName = props.posterUrl.name
        mwID = props.posterUrl.id
    }

    if (props.cast) {
        // console.log("from my watch page")

        mwMediaType = props.cast.media_type || props.cast.known_for_department
        console.log(props.cast.media_type)
        if (props.cast.known_for_department) {
            mwMediaType = "person"

        }

        // mwMediaType = "person"
        mwTitle = props.cast.title
        mwName = props.cast.name
        mwID = props.cast.id
        console.log(mwID)
        console.log(mwName)
        console.log(mwTitle)
        console.log(mwMediaType)
    }

    const handleChange = (e) => {
        haveSeen = e.target.checked
        console.log(haveSeen)
        if (haveSeen) {
            console.log("true? ", haveSeen)
            setDisplay("I have seen this",)
            setSeen(true)

        } else {
            setDisplay("I have not seen this")
            setSeen(false)
        }
        console.log("State: ", display)
        console.log("haveSeen? ", haveSeen)
        return (haveSeen)
    }

    let mwHaveSeen = seen
    mwName = mwName || mwTitle
    console.log(mwHaveSeen)

    if (props.searchedDetails) {
        console.log("props maybe?  ", props.mediaTypeMw)
        console.log("watchedDetails ", props.searchedDetails)
        mwMediaType = props.mediaTypeMw
        mwTitle = props.searchedDetails.title
        mwName = props.searchedDetails.name
        mwID = props.searchedDetails.id
        // console.log()

        console.log(mwID)
        console.log(mwName)
        console.log(mwTitle)
        console.log(mwMediaType)
    }

    console.log(mwID)
    console.log(mwName)
    console.log(mwTitle)
    console.log(mwMediaType)
    console.log((props.mediaTypeMw))

    // console.log(mwMediaType)

    return (
        <>
            <Container className='p-2'>
                {mwMediaType !== "person" &&
                    <>
                        <Row>
                            <Col md={12} className='rounded '>
                                <Form.Check
                                    className='ms-4 me-5'
                                    onChange={e => handleChange(e)}
                                    type="switch"
                                    id="custom-switch"
                                    // reverse
                                // label={display}
                                // style={{}}
                                />
                            </Col>
                            <Col>

                                <Form.Check.Label>{display}</Form.Check.Label>
                            </Col>

                        </Row>
                        <Row>
                            <Button 
                            style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} 
                            className="btn-sm m-2" onClick={() => props.handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle, mwHaveSeen)}>Add to MyWatch </Button>

                        </Row>
                    </>
                }

            </Container>
        </>

    )
}