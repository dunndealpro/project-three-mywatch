import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


export default function SeenOnlySwitch(props) {

    // function displayLogic(){
    //     if (props.seenBoolean) {
    //     setDisplay("I have seen this",)
    // } else {
    //     setDisplay("I have not seen this")        
    // }    
    // }
    console.log(props.display)
    
    const [seen, setSeen] = useState(props.seenBoolean)
    const [display, setDisplay] = useState(props.display)
    let haveSeen

    let mwMediaType
    let mwTitle
    let mwName
    let mwID

    let mwMediaTypeMw
    let mwTitleMw
    let mwNameMw
    let mwIDMw
    let mwHaveSeenMw 

    let person = "person"

    // console.log(props.posterUrl.media_type )

    if (props.watchedDetails) {
        console.log("watchedDetails ", props.watchedDetails)
        mwMediaTypeMw = props.mediaType
        mwTitleMw = props.watchedDetails.title
        mwNameMw = props.watchedDetails.name
        mwIDMw = props.watchedDetails.id
        mwHaveSeenMw = true
        // console.log()

        console.log(mwIDMw)
    console.log(mwNameMw)
    console.log(mwTitleMw)
    console.log(mwMediaTypeMw)
    }

    // if (props.seenBoolean) {
    //     console.log("true? ", props.seenBoolean)
    //     setDisplay("I have seen this",)
    //     setSeen(true)

    // } else {
    //     setDisplay("I have not seen this")
    //     setSeen(false)
    // }

    // 

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
        mwHaveSeen = seen
        props.handleAddToMyWatch(mwIDMw, mwName, mwMediaTypeMw, mwTitleMw, haveSeen)
        return (haveSeen)
    }

    let mwHaveSeen = seen
    mwName = mwName || mwTitle
    console.log(seen)

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

    // if (props.seenBoolean == true) {
    //         display = "I have seen this"
    //         console.log(display)
    //     } else {
    //         display = "I have not seen this"
    //         console.log(display)
    //     }

    // console.log(mwMediaType)

    return (
        <>
            {/* <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(mwID, mwName, mwMediaType, mwTitle, mwHaveSeen)}>Add to MyWatch </Button> */}
            {mwMediaType !== "person" &&
                <>
                    <Form.Check
                        checked={seen}
                        onChange={e => handleChange(e)}
                        type="switch"
                        id="custom-switch"
                    />


                    <Form.Check.Label>{display}</Form.Check.Label>
                </>
            }
        </>

    )
}