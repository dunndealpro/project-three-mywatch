import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';

import LandingPoster from "../../components/LandingPoster/LandingPoster";
import SearchBox from '../../components/SearchBox/SearchBox';
import SummaryText from '../../components/SummaryText/SummaryText';
import SearchResults from '../../components/SearchResults/SearchResults';


export default function LandingPage(props) {
    // // console.log(props.landingPoster.results.length)
    // const trending = props.landingPoster.results

    // const trendingPosters = []

    // trending.forEach((url)=>{
    //     trendingPosters.push(url.poster_path)
    // })

    return (
        <>
            <Container className='fluid p-2 rounded position-relative' style={{ background: 'rgba(250,232,216,1)' }}>
                <Row>
                    <Col className='mx-auto' lg={8}>

                        <div className='fs-1 text-center'>Welcome To myWatch!</div>
                        {/* <div className='fs-3 text-center'>(witty comment goes here)</div> */}
                        <Container className='text-center '>
                            <div className='fs-2'>Trending Today!</div>

                            <Carousel className='w-100 ' >
                                {props.landingPoster.results && props.landingPoster.results.map((posterUrl) =>
                                    <Carousel.Item className='' interval={3500} key={posterUrl.id}>
                                        <LandingPoster
                                            key={posterUrl.id}
                                            posterUrl={posterUrl}
                                            result={posterUrl}
                                            handleAddToMyWatch={props.handleAddToMyWatch}
                                            watched={props.watched}
                                            notWatched={props.notWatched}
                                            myActors={props.myActors}

                                        />
                                    </Carousel.Item>
                                )}
                            </Carousel>

                        </Container>

                        {/* <SearchBox
                    setSearch={props.setSearch}
                    search={props.search}
                    getSearch={props.getSearch}
                />
                <SearchResults 
                    searchResults={props.searchResults}
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    mwSearch={props.mwSearch}
                    watched={props.watched}
                    notWatched={props.notWatched}
                    myActors={props.myActors}
                    /> */}

                    </Col>
                </Row>
            </Container>
        </>
    )
}