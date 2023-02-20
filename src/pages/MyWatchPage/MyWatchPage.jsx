import { useEffect } from "react"

import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row'

import WatchedItem from "../../components/MyWatchItem/MyWatchItem"

export default function MyWatchPage(props) {

    let userTest = []

    useEffect(() => {
        props.getWatched()
    }, [])

    userTest = props.watched

    return (
        <div className="">
            <Container className="text-center rounded p-2 " style={{ background: 'rgba(226,206,153,1)' }}>
                <h1 className="p-2">myWatch Page</h1>
                <Tabs
                    variant="pills"
                    defaultActiveKey="watchedItems"
                    id="fill-tab-example"
                    className="mb-3 fs-3 p-3 rounded"
                    fill
                >
                    <Tab variant="pills" eventKey="watchedItems" title="Watched Items">
                        <Container className="text-center" >
                            <Row className="justify-content-center" >
                                {props.watched.map((w) => (
                                    <WatchedItem
                                        key={w._id}
                                        tmdBid={w.tmdBid}
                                        mediaType={w.mediaType}
                                        handleAddToMyWatch={props.handleAddToMyWatch}
                                        seenBoolean={true}
                                        user={props.user}
                                        comments={w.comments}
                                        display={"I have seen this movie"}
                                        watched={props.watched}
                                        notWatched={props.notWatched}
                                        myActors={props.myActors}
                                        getWatched={props.getWatched}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </Tab>

                    <Tab variant="pills " eventKey="nonWatchedItems" title="Need to Watch">
                        <Container className="text-center" >
                            <Row className="justify-content-center" >
                                {props.notWatched.map((w) => (
                                    <WatchedItem
                                        key={w._id}
                                        tmdBid={w.tmdBid}
                                        mediaType={w.mediaType}
                                        handleAddToMyWatch={props.handleAddToMyWatch}
                                        seenBoolean={false}
                                        user={props.user}
                                        comments={w.comments}
                                        display={"I have not seen this movie"}
                                        watched={props.watched}
                                        notWatched={props.notWatched}
                                        myActors={props.myActors}
                                        getWatched={props.getWatched}
                                    />
                                ))}

                            </Row>

                        </Container>
                    </Tab>
                    <Tab variant="pills " eventKey="myActors" title="myActors">
                        <Container className="text-center" >
                            <Row className="justify-content-center" >
                                {props.myActors.map((w) => (
                                    <WatchedItem
                                        key={w._id}
                                        tmdBid={w.tmdBid}
                                        mediaType={w.mediaType}
                                        handleAddToMyWatch={props.handleAddToMyWatch}
                                        user={props.user}
                                        comments={w.comments}
                                        watched={props.watched}
                                        notWatched={props.notWatched}
                                        myActors={props.myActors}
                                        getWatched={props.getWatched}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}