import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import TrendingDetailModal from '../TrendingDetailModal/TrendingDetailModal';
import { useEffect, useState } from 'react';



export default function LandingPoster(props) {

    const [modalShow, setModalShow] = useState(false);
    const [searchedDetails, setSearchedDetails] = useState([])
    const [searchedCredits, setSearchedCredits] = useState([])

    const API_KEY = process.env.REACT_APP_API_KEY 
    let trendingUrl = `https://image.tmdb.org/t/p/original/${props.posterUrl.backdrop_path}`
    let trendingTitle
    if (props.posterUrl.title) {
        trendingTitle = props.posterUrl.title
    } else {
        trendingTitle = props.posterUrl.name
    }

    console.log()

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

    }
    useEffect(() => {
        console.log("useEffect? search")
        getSearchInfo()

    }, []);

    // if (props.landingPoster) {
    //     console.log("response: ", props.landingPoster.results[0].poster_path)
    //     trending1Url = `https://image.tmdb.org/t/p/original/${props.landingPoster.results[0].poster_path}`
    // }

    return (
        <>
            <div className="rounded">
                <img width="100%" src={trendingUrl} alt="" />
                <Carousel.Caption>
                    <Container>
                        <div className="" >
                            {/* <h3 className='fs-5'></h3> */}

                            {/* <TrendingSummaryText
                                posterUrl={props.posterUrl}
                                trendingOverview={trendingOverview}
                                handleAddToMyWatch={props.handleAddToMyWatch}
                            /> */}
                            <Button style={{backgroundColor: 'rgba(0,0,0,.5)', borderColor: 'black'} }  className="m-2 fs-6" variant="primary" onClick={() => setModalShow(true)}>{trendingTitle}</Button>
                            <TrendingDetailModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                handleAddToMyWatch={props.handleAddToMyWatch}
                                seenBoolean={props.seenBoolean}
                                user={props.user}
                                watched={props.watched}
                                notWatched={props.notWatched}
                                myActors={props.myActors}
                                searchedDetails={searchedDetails}
                                searchedCredits={searchedCredits}
                                result={props.posterUrl}
                                mediaType={props.mediaType}


                            />

                        </div>

                    </Container>

                </Carousel.Caption>

            </div>


        </>
    )
}