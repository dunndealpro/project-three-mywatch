import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import {useState } from 'react';

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

    if (props.posterUrl) {
        mwMediaType = props.posterUrl.media_type
        mwTitle = props.posterUrl.title
        mwName = props.posterUrl.name
        mwID = props.posterUrl.id
    }

    if (props.cast) {
        mwMediaType = props.cast.media_type || props.cast.known_for_department
        if (props.cast.known_for_department) {
            mwMediaType = "person"
        }
        mwTitle = props.cast.title
        mwName = props.cast.name
        mwID = props.cast.id
    }

    const handleChange = (e) => {
        haveSeen = e.target.checked
        if (haveSeen) {
            setDisplay("I have seen this",)
            setSeen(true)

        } else {
            setDisplay("I have not seen this")
            setSeen(false)
        }
        return (haveSeen)
    }

    let mwHaveSeen = seen
    mwName = mwName || mwTitle

    if (props.searchedDetails) {
        mwMediaType = props.mediaTypeMw
        mwTitle = props.searchedDetails.title
        mwName = props.searchedDetails.name
        mwID = props.searchedDetails.id
    }

    function clickToClose(){
        props.handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle, mwHaveSeen)
        props.onHide() 
    }

    return (
        <>
            <Container className='m-3'>
                {mwMediaType !== "person" &&
                    <>
                        <Row>
                            <Col  className='rounded '>
                                <Form.Check
                                    className='ms-4'
                                    onChange={e => handleChange(e)}
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Col>
                            <Col>
                                <Form.Check.Label>{display}</Form.Check.Label>
                            </Col>
                        </Row>
                </>
                }
                            </Container>
                        <Row>
                            <Button 
                            style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} 
                            className="btn-sm"
                            onClick={() => clickToClose()}
                             >Add to MyWatch </Button>
                        </Row>
        </>
    )
}