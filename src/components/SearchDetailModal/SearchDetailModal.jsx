import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import CommentCard from '../CommentCard/CommentCard';
import PersonCard from '../PersonCard/PersonCard';
import SeenSwitch from '../SeenSwitch/SeenSwitch';

import * as myWatchAPI from "../../utilities/myWatch-api"

import "./DetailModal.css"



export default function SearchDetailModal(props) {
    const [comment, setComment] = useState("")

    let isInMyWatched = Boolean(false)
    let isInMyNotWatched = Boolean(false)
    let isInMyActors = Boolean(false)
    let tmdBid 
    let haveSeen
    let mwName
    let header2 = ""
    let img
    let release = props.searchedDetails.release_date || props.searchedDetails.last_air_date
    let summary = props.searchedDetails.overview || props.searchedDetails.biography
    let title = props.searchedDetails.name || props.searchedDetails.title
    let title2 = title

    props.watched.forEach((watch) => {
        if (watch.tmdBid === props.searchedDetails.id) {
            return isInMyWatched = true
        }
    })

    props.notWatched.forEach((watch) => {
        if (watch.tmdBid === props.searchedDetails.id) {
            return isInMyNotWatched = true
        }
    })
    props.myActors.forEach((watch) => {
        if (watch.tmdBid === props.searchedDetails.id) {
            return isInMyActors = true
        }
    })

    if (props.mwSearch) {
        tmdBid = props.mwSearch.tmdBid
    }

    if (props.searchedDetails.name && props.searchedDetails.biography) {
        header2 = "Appears In"
    } else if (props.searchedDetails.title) {
        header2 = "Cast"
    } else if (props.searchedDetails.name && props.searchedDetails.overview) {
        header2 = "Cast"
    }

    let mediaType
    if (props.result.media_type === "movie") {
        mediaType = "Movie"
    } else if (props.result.media_type === "tv") {
        mediaType = "Television"
    } else if (props.result.media_type === "person") {
        mediaType = "Person"
    }

    if (props.searchedDetails.backdrop_path) {
        img = `https://image.tmdb.org/t/p/original${props.searchedDetails.poster_path}`
    } else if (props.searchedDetails.profile_path) {
        img = `https://image.tmdb.org/t/p/original${props.searchedDetails.profile_path}`
    }

    async function handleAddComment(e) {
        e.preventDefault()
        let tmdBid = props.searchedDetails.id
        let userInfo = props.user._id
        await myWatchAPI.addComment(userInfo, tmdBid, comment)
        setComment("")
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
                        ({mediaType} - {release})
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container >
                    <Row>
                        <Col  className="text-center m-2">
                            <Image fluid className="rounded" src={img} width={250} />
                            {isInMyWatched || isInMyNotWatched || isInMyActors &&
                                <Form  >
                                    <Form.Group className="mb-3" controlId="userComment">
                                        <Form.Control className="m-3" as="textarea" rows={3} type="text" value={comment} placeholder="Enter Comment" onChange={handleChange} />
                                    </Form.Group>
                                    <Button onClick={e => handleAddComment(e)} variant="primary" >
                                        Submit
                                    </Button>
                                </Form>
                            }                           
                            <SeenSwitch 
                            handleAddToMyWatch={props.handleAddToMyWatch}
                            searchedDetails={props.searchedDetails}
                            mediaTypeMw={props.result.media_type}
                            onHide={props.onHide}
                            />
                        </Col>
                        <Col>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Summary</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        <p>{summary}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{header2}</Accordion.Header>
                                    <Accordion.Body className="accordionCustom">
                                        {[props.searchedCredits.cast && props.searchedCredits.cast.slice(0, 1).map((cast) => (
                                            <PersonCard
                                                key={cast.credit_id}
                                                cast={cast}
                                                handleAddToMyWatch={props.handleAddToMyWatch}
                                                watchedCredits={props.searchedCredits}
                                                watchedDetails={props.searchedDetails}
                                                mediaType={cast.media_type}
                                            />
                                        ))]}
                                    </Accordion.Body>
                                </Accordion.Item>
                                {props.mwSearch &&
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Comments</Accordion.Header>
                                        <Accordion.Body className="accordionCustom">
                                            {props.mwSearch.comments && props.mwSearch.comments.map((comment) => (
                                                <CommentCard
                                                    key={comment._id}
                                                    comment={comment}
                                                />
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                }
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} 
                onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}