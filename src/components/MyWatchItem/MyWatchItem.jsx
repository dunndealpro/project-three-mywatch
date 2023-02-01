import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export default function WatchedItem(props) {

    const [watchedDetails, setWatchedDetails] = useState([])
    const [watchedCredits, setWatchedCredits] = useState([])

    let itemImg 
    let title = watchedDetails.name || watchedDetails.title
    const API_KEY = "a72c1d466153d06b65f2879b369031d8"

    if(watchedDetails.backdrop_path){
        itemImg = `https://image.tmdb.org/t/p/original${watchedDetails.backdrop_path}`
    }else if (watchedDetails.profile_path){
        itemImg =  `https://image.tmdb.org/t/p/original${watchedDetails.profile_path}`     
    }
    

// let mediaType = props.mediaType
// console.log(mediaType)

    async function getInfo() {
        if(props.mediaType === "movie"){
            let watchedDetailsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/movie/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`
    
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
        }
        else if (props.mediaType === "tv"){
            let watchedDetailsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/tv/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`
    
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
        }else if (props.mediaType === "person"){
            let watchedDetailsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}?api_key=${API_KEY}&language=en-US`
            let watchedCreditsUrl = `https://api.themoviedb.org/3/person/${props.tmdBid}/credits?api_key=${API_KEY}&language=en-US`
    
            let watchedDetailsTemp = await fetch(watchedDetailsUrl).then(res => res.json())
            let watchedCreditsTemp = await fetch(watchedCreditsUrl).then(res => res.json())
            setWatchedDetails(watchedDetailsTemp)
            setWatchedCredits(watchedCreditsTemp)
        }
    }

    useEffect(() => {
        getInfo()
    }, []);

    // console.log(watchedDetails.backdrop_path)
    console.log(watchedDetails.backdrop_path)
    console.log(watchedDetails.title)

    return (
        <>                         
                <Card className="m-2" style={{ width: '18rem' }}>
                    <Card.Title className="m-2 fw-bold">{title}</Card.Title>
                    <Card.Img variant="none" src={itemImg} />
                </Card>           
        </>
    )
}