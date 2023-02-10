import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import PersonCard from '../PersonCard/PersonCard';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import * as myWatchAPI from "../../utilities/myWatch-api"

import "./DetailModal.css"
import CommentCard from '../CommentCard/CommentCard';
import { Carousel } from 'react-bootstrap';

export default function DetailModal(props) {

    const [comment, setComment] = useState("")

    const [display, setDisplay] = useState("I have not seen this")
    const [seen, setSeen] = useState(props.seenBoolean)

    let haveSeen

    let header2 = ""
    let img
    let release = props.watchedDetails.release_date || props.watchedDetails.last_air_date
    // let genre = props.watchedDetails.genres[0].name
    let cast = props.watchedCredits.cast
    // console.log(cast)

    let summary = props.watchedDetails.overview || props.watchedDetails.biography

    let title = props.watchedDetails.name || props.watchedDetails.title

    if (props.watchedDetails.name && props.watchedDetails.biography) {
        header2 = "Appears In"
    } else if (props.watchedDetails.title) {
        header2 = "Cast"
    } else if (props.watchedDetails.name && props.watchedDetails.overview) {
        header2 = "Cast"
    }

    let mediaType
    if (props.mediaType === "movie") {
        mediaType = "Movie"
    } else if (props.mediaType === "tv") {
        mediaType = "Television"
    } else if (props.mediaType === "person") {
        mediaType = "Person"
    }

    // console.log("Modal: ", props.watchedCredits)

    if (props.watchedDetails.backdrop_path) {
        img = `https://image.tmdb.org/t/p/original${props.watchedDetails.poster_path}`
    } else if (props.watchedDetails.profile_path) {
        img = `https://image.tmdb.org/t/p/original${props.watchedDetails.profile_path}`
    }

    async function handleAddComment(e) {
        e.preventDefault()
        let tmdBid = props.watchedDetails.id
        console.log("Add Comment step 1")
        console.log(props.user)
        let userInfo = props.user._id
        console.log(tmdBid)
        let userComment = await myWatchAPI.addComment(userInfo, tmdBid, comment)
        console.log("Comment: ", props.watchedDetails.id)
        console.log(e.comment)

        setComment("")
        // console.log(userComment)        
    }

    let myWatchComments = []

    //     async function getComments() {
    //         let tmdBid = props.watchedDetails.id
    // console.log("Getti g comments?")
    //         myWatchComments = await myWatchAPI.getComments(tmdBid)
    //         console.log("Retrieved Comments: ", myWatchComments)
    //     }

    // getComments()

    function handleChange(evt) {
        setComment(
            evt.target.value,
        );
    };
    // const handleChange = (e) => {
    //     comment = e.target.checked
    //     console.log(commet)
    //     if (haveSeen) {
    //         console.log("true? ", haveSeen)
    //         setDisplay("I have seen this",)
    //         setSeen(true)

    //     } else {
    //         setDisplay("I have not see this")
    //         setSeen(false)
    //     }
    //     console.log("State: ", display)
    //     console.log("haveSeen? ", haveSeen)
    //     return( haveSeen)
    // }

    // console.log(props.comments)
    // console.log(...props)

    let releaseDisplay 

    if (mediaType == "Movie" || mediaType == "Television"){
        releaseDisplay = mediaType + " - " + release
        console.log(releaseDisplay)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className='fs-2'>
                        {title}
                    </span>  &nbsp;&nbsp;                
                        <span className='fs-4 fw-light'>
                            {releaseDisplay}
                        </span>
                       
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container >
                    <Row>
                        <Col className="text-center">
                            <Image className="rounded" src={img} width={250} />

                            <Form  >
                                <Form.Group className="mb-3" controlId="userComment">
                                    <Form.Control className="m-3" as="textarea" rows={3} type="text" value={comment} placeholder="Enter Comment" onChange={handleChange} />
                                </Form.Group>
                                <Button onClick={e => handleAddComment(e)} variant="primary" >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Summary</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        <p>{summary}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{header2}</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        {/* {cast} */}
                                        {[props.watchedCredits.cast && props.watchedCredits.cast.slice(0, 1).map((cast) => (
                                            <PersonCard
                                                key={cast.credit_id}
                                                cast={cast}
                                                handleAddToMyWatch={props.handleAddToMyWatch}
                                                watchedCredits={props.watchedCredits}
                                                watchedDetails={props.watchedDetails}
                                                mediaType={cast.media_type}
                                            />
                                        ))]}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Comments</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        {props.comments && props.comments.map((comment) => (
                                            <CommentCard
                                                key={comment._id}
                                                comment={comment}
                                            />

                                        ))}

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}