import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import SearchDetailModal from '../SearchDetailModal/SearchDetailModal';
import * as myWatchAPI from "../../utilities/myWatch-api"
import { useEffect, useState } from 'react';


export default function SearchItem(props) {
console.log(props.result)
   

    const [searchedDetails, setSearchedDetails] = useState([])
    const [searchedCredits, setSearchedCredits] = useState([])
    const [modalShow, setModalShow] = useState(false);
    // const [displayComments, setDisplayComments] = useState([])
    const [mwSearch, setMwSearch] = useState(false)

    let itemImg
    let title = searchedDetails.name || searchedDetails.title
    const API_KEY = process.env.REACT_APP_API_KEY 

    if (searchedDetails.backdrop_path) {
        itemImg = `https://image.tmdb.org/t/p/original${searchedDetails.backdrop_path}`
    } else if (searchedDetails.profile_path) {
        itemImg = `https://image.tmdb.org/t/p/original${searchedDetails.profile_path}`
    }


    // let mediaType = props.mediaType
    // console.log(mediaType)
    

    async function getSearchInfo() {
        if (props.result.media_type === "movie") {
            console.log("Test")
            let searchedDetailsUrl = `https://api.themoviedb.org/3/movie/${props.result.id}?api_key=${API_KEY}&language=en-US`
            let searchedCreditsUrl = `https://api.themoviedb.org/3/movie/${props.result.id}/credits?api_key=${API_KEY}&language=en-US`

            let searchedDetailsTemp = await fetch(searchedDetailsUrl).then(res => res.json())
            let searchedCreditsTemp = await fetch(searchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.result.id)
            setSearchedDetails(searchedDetailsTemp)
            setSearchedCredits(searchedCreditsTemp)
            // setDisplayComments(displayCommentsTemp)
        }
        else if (props.result.media_type === "tv") {
            console.log("Test")
            let searchedDetailsUrl = `https://api.themoviedb.org/3/tv/${props.result.id}?api_key=${API_KEY}&language=en-US`
            let searchedCreditsUrl = `https://api.themoviedb.org/3/tv/${props.result.id}/credits?api_key=${API_KEY}&language=en-US`

            let searchedDetailsTemp = await fetch(searchedDetailsUrl).then(res => res.json())
            let searchedCreditsTemp = await fetch(searchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.result.id)
            // setDisplayComments(displayCommentsTemp)
            setSearchedDetails(searchedDetailsTemp)
            setSearchedCredits(searchedCreditsTemp)
            
        } else if (props.result.media_type === "person") {
            console.log("Test")
            let searchedDetailsUrl = `https://api.themoviedb.org/3/person/${props.result.id}?api_key=${API_KEY}&language=en-US`
            let searchedCreditsUrl = `https://api.themoviedb.org/3/person/${props.result.id}/combined_credits?api_key=${API_KEY}&language=en-US`

            let searchedDetailsTemp = await fetch(searchedDetailsUrl).then(res => res.json())
            let searchedCreditsTemp = await fetch(searchedCreditsUrl).then(res => res.json())
            // let displayCommentsTemp = await myWatchAPI.getComments(props.result.id)
            // setDisplayComments(displayCommentsTemp)
            setSearchedDetails(searchedDetailsTemp)
            setSearchedCredits(searchedCreditsTemp)
            
        }
        searchMyWatch()
    }

    async function searchMyWatch(){
        const mwResults = await myWatchAPI.getMyWatch(props.result.id)
      console.log(mwResults)
      setMwSearch(mwResults)
    
    }

    // async function deleteFromMyWatch(e){
    //     console.log("remove clicked", props.result.id)

    //     const myWatchToBeDeleted =  await myWatchAPI.deleteFromMyWatch(props.result.id)
    // }
    console.log(props.result.media_type)

    console.log(searchedDetails)
    useEffect(() => {
        console.log("useEffect? search")
        getSearchInfo()
        
    }, []);

console.log(mwSearch)
    let myWatchComments

    // console.log("myWatch exists: (true or false): ", props.mwSearch.comments)

   

    return (
        <>
            <Card className="m-2 bg-light" style={{ width: '18rem' }}>
                <Card.Title className="m-2 fw-bold">{title}</Card.Title>
                <Card.Img className="rounded" variant="none" src={itemImg} />
                <Button 
                style={{backgroundColor: 'rgb(43, 112, 168)', borderColor: 'rgb(43, 112, 168)'}} 
                className="m-2" variant="primary" onClick={() => setModalShow(true)}>Details</Button>
                {/* <Button className='m-2' variant='danger' onClick={e => deleteFromMyWatch(e)}>Remove From MyWatch</Button> */}
                <SearchDetailModal
                   
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    searchedDetails={searchedDetails}
                    mediaType={props.mediaType}
                    searchedCredits={searchedCredits}
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    seenBoolean={props.seenBoolean}
                    user={props.user}
                    comments={props.comments}
                    mwSearch={mwSearch}
                    watched={props.watched}
                    notWatched={props.notWatched}
                    myActors={props.myActors}
                    result={props.result}
                />
                
               
            </Card>
        </>
    )
}