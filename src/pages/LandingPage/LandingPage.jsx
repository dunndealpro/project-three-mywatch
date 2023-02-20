import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import LandingPoster from "../../components/LandingPoster/LandingPoster";

export default function LandingPage(props) {

    return (
        <>
            <Container className='fluid mt-2 p-2 pt-4 rounded position-relative' style={{ background: 'rgba(226,206,153,1)' }}>
                <Row>
                    <Col className='mx-auto' lg={8}>
                        <div className='fs-1 text-center'>Welcome To myWatch!!!</div>
                        <Container className='text-center '>
                            <div className='fs-2'>Trending Today</div>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}