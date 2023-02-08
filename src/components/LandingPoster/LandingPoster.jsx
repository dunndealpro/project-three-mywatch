import Carousel from 'react-bootstrap/Carousel';
import TrendingSummaryText from '../TrendingSummaryText/TrendingSummaryText';

export default function LandingPoster(props) {
    // let trending1Url

    // console.log("test  ", props.posterUrl.backdrop_path)
    let trendingUrl = `https://image.tmdb.org/t/p/original/${props.posterUrl.backdrop_path}`
    let trendingTitle
    let trendingOverview = props.posterUrl.overview


if (props.posterUrl.title){
    trendingTitle= props.posterUrl.title
}else{
    trendingTitle=props.posterUrl.name
}

console.log()



    // if (props.landingPoster) {
    //     console.log("response: ", props.landingPoster.results[0].poster_path)
    //     trending1Url = `https://image.tmdb.org/t/p/original/${props.landingPoster.results[0].poster_path}`
    // }

    return (
        <>
            <div className="rounded">
                <img width="100%" src={trendingUrl} alt="" />
                <Carousel.Caption>
                    <div className="rounded-2 bg-dark m-2 p-2 d-block w-100">
                    <h3>{trendingTitle}</h3>
                    <TrendingSummaryText 
                    posterUrl={props.posterUrl}
                    trendingOverview = {trendingOverview}
                    handleAddToMyWatch = {props.handleAddToMyWatch}
                    />
                    
                    </div>
                </Carousel.Caption>

            </div>


        </>
    )
}