import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

import DetailModal from '../DetailModal/DetailModal';
import SeenOnlySwitch from '../SeenOnlySwitch/SeenOnlySwitch';

import * as myWatchAPI from "../../utilities/myWatch-api"

export default function WatchedItem(props) {

    const [watchedDetails, setWatchedDetails] = useState([])
    const [watchedCredits, setWatchedCredits] = useState([])
    const [modalShow, setModalShow] = useState(false);

    let itemImg
    let title = watchedDetails.name || watchedDetails.title
    
    const API_KEY = process.env.REACT_APP_API_KEY 

    if (watchedDetails.backdrop_path) {
        itemImg = `https://image.tmdb.org/t/p/original${watchedDetails.backdrop_path}`
    } else if (watchedDetails.profile_path) {
        itemImg = `https://image.tmdb.org/t/p/original${watchedDetails.profile_path}`
    }

    async function getInfo() {
        if (props.mediaType === "movie") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
        }
        else if (props.mediaType === "tv") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)

        } else if (props.mediaType === "person") {
            let watchedDetailsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}/combined_credits?api_key=${API_KEY}&language=en-US`
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
        }        
    }

    async function deleteFromMyWatch(e) {
        await myWatchAPI.deleteFromMyWatch(props.tmdBid)
        props.getWatched()
    }

    useEffect(() => {
        getInfo()
    }, []);

    return (
        <>
            <Card className="m-2 bg-light" style={{ width: '18rem' }}>
                <Card.Title className="m-2 fw-bold">{title}</Card.Title>
                <Card.Img className="rounded" variant="none" src={itemImg} />
                <Button style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} className="m-2"  onClick={() => setModalShow(true)}>Details</Button>
                <Button className='m-2' style={{backgroundColor: 'rgb(206, 53, 54)', borderColor: 'rgb(206, 53, 54)'}} onClick={e => deleteFromMyWatch(e)}>Remove From MyWatch</Button>
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