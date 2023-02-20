import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

import CommentCard from '../CommentCard/CommentCard';
import PersonCard from '../PersonCard/PersonCard';
import "./DetailModal.css"

import * as myWatchAPI from "../../utilities/myWatch-api"

export default function DetailModal(props) {

    const [comment, setComment] = useState("")
    let header2 = ""
    let img
    let release = props.watchedDetails.release_date || props.watchedDetails.last_air_date
    let summary = props.watchedDetails.overview || props.watchedDetails.biography
    let title = props.watchedDetails.name || props.watchedDetails.title
    let mediaType
    let releaseDisplay

    if (props.watchedDetails.name && props.watchedDetails.biography) {
        header2 = "Appears In"
    } else if (props.watchedDetails.title) {
        header2 = "Cast"
    } else if (props.watchedDetails.name && props.watchedDetails.overview) {
        header2 = "Cast"
    }

    if (mediaType === "Movie" || mediaType === "Television") {
        releaseDisplay = mediaType + " - " + release
    }

    if (props.mediaType === "movie") {
        mediaType = "Movie"
    } else if (props.mediaType === "tv") {
        mediaType = "Television"
    } else if (props.mediaType === "person") {
        mediaType = "Person"
    }

    if (props.watchedDetails.backdrop_path) {
        img = `https://image.tmdb.org/t/p/original${props.watchedDetails.poster_path}`
    } else if (props.watchedDetails.profile_path) {
        img = `https://image.tmdb.org/t/p/original${props.watchedDetails.profile_path}`
    }


    async function handleAddComment(e) {
        e.preventDefault()
        let tmdBid = props.watchedDetails.id
        let userInfo = props.user._id
         await myWatchAPI.addComment(userInfo, tmdBid, comment)
        setComment("")
        props.getWatched()
    }


    function handleChange(evt) {
        setComment(
            evt.target.value,
        );
    };

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
                                <Button
                                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                                    onClick={e => handleAddComment(e)} variant="primary" >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            <Accordion className='mt-2' defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Summary</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        <p>{summary}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{header2}</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
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
                <Button
                    style={{ backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)' }}
                    onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}