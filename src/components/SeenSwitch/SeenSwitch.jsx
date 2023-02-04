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

    console.log(props.mwMediaType)
    let mwMediaType = props.posterUrl.media_type
    let mwTitle = props.posterUrl.title
    let mwName = props.posterUrl.name
    let mwID = props.posterUrl.id

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
              <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(mwID, mwMediaType, mwTitle, mwName,mwHaveSeen)}>Add to MyWatch </Button>
                        { mwMediaType !== "person" &&
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