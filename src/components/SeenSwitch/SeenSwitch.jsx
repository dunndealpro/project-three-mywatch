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

    let person = "person"

    // console.log(props.posterUrl.media_type )

    

    if(props.posterUrl )
    {
        // console.log("from trending page")
    mwMediaType = props.posterUrl.media_type 
    mwTitle = props.posterUrl.title
    mwName = props.posterUrl.name
    mwID = props.posterUrl.id
}

    if(props.cast )
    {
        // console.log("from my watch page")
        
    mwMediaType = props.cast.media_type || props.cast.known_for_department
    console.log(props.cast.media_type)
    if (props.cast.known_for_department){
        mwMediaType = "person"
    }

    // mwMediaType = "person"
    mwTitle = props.cast.title
    mwName = props.cast.name
    mwID = props.cast.id
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
        return( haveSeen)
    }

    let mwHaveSeen =seen
    mwName = mwName || mwTitle

    // console.log(mwMediaType)

    return (
        <>
              <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(mwID,  mwName, mwMediaType, mwTitle,mwHaveSeen)}>Add to MyWatch </Button>
                        { mwMediaType !==  "person" &&
                       <>
                        <Form.Check
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