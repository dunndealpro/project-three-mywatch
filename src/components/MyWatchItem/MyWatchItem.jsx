import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import DetailModal from '../DetailModal/DetailModal';
import * as myWatchAPI from "../../utilities/myWatch-api"
import SeenOnlySwitch from '../SeenOnlySwitch/SeenOnlySwitch';


export default function WatchedItem(props) {

    const [watchedDetails, setWatchedDetails] = useState([])
    const [watchedCredits, setWatchedCredits] = useState([])
    const [modalShow, setModalShow] = useState(false);
    // const [displayComments, setDisplayComments] = useState([])
    let display 

    let itemImg
    let title = watchedDetails.name || watchedDetails.title
    const API_KEY = "a72c1d466153d06b65f2879b369031d8"

    if (watchedDetails.backdrop_path) {
        itemImg = `https://image.tmdb.org/t/p/original${watchedDetails.backdrop_path}`
    } else if (watchedDetails.profile_path) {
        itemImg = `https://image.tmdb.org/t/p/original${watchedDetails.profile_path}`
    }


    // let mediaType = props.mediaType
    console.log(props.tmdBid.mediaType)

    async function getInfo() {
        if (props.mediaType === "movie") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`

            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.tmdBid)
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
            // setDisplayComments(displayCommentsTemp)
        }
        else if (props.mediaType === "tv") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`

            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.tmdBid)
            // setDisplayComments(displayCommentsTemp)
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)

        } else if (props.mediaType === "person") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}/combined_credits?api_key=${API_KEY}&language=en-US`

            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.tmdBid)
            // setDisplayComments(displayCommentsTemp)
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)

        }
        
    }

    async function deleteFromMyWatch(e) {
        console.log("remove clicked", props.tmdBid)

        const myWatchToBeDeleted = await myWatchAPI.deleteFromMyWatch(props.tmdBid)
        props.getWatched()
    }

    useEffect(() => {
        console.log("useEffect?")
        
        getInfo()

    }, []);



    // console.log(watchedDetails.backdrop_path)
    // console.log(watchedDetails.backdrop_path || watchedDetails.profile_path)
    // console.log(watchedDetails.title || watchedDetails.name)
    // console.log(watchedDetails.comments)
    // console.log(watchedDetails.id)
    // console.log(watchedDetails.id)

    let myWatchComments


    console.log("display ", props.seenBoolean, display)


    return (
        <>
            <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Title className="m-2 fw-bold">{title}</Card.Title>
                <Card.Img className="rounded" variant="none" src={itemImg} />
                <Button className="m-2" variant="primary" onClick={() => setModalShow(true)}>Details</Button>
                <Button className='m-2' variant='danger' onClick={e => deleteFromMyWatch(e)}>Remove From MyWatch</Button>
                <SeenOnlySwitch
                    seenBoolean={props.seenBoolean}
                    watchedDetails={watchedDetails}
                    display={props.display}
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    mediaType={props.mediaType}
                    getWatched={props.getWatched}
                />
                <DetailModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    watchedDetails={watchedDetails}
                    mediaType={props.mediaType}
                    watchedCredits={watchedCredits}
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    seenBoolean={props.seenBoolean}
                    user={props.user}
                    comments={props.comments}
                    getWatched={props.getWatched}
                />
            </Card>
        </>
    )
}