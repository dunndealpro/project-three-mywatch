import { useState, useEffect } from "react"
import WatchedItem from "../../components/MyWatchItem/MyWatchItem"
import * as myWatchAPI from "../../utilities/myWatch-api"
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function MyWatchPage(props) {

    let userTest = []

    useEffect(() => {
        console.log("Get Watch UseEffect")
        props.getWatched()
    }, [])

     userTest = props.watched.watched
    console.log("userTEst  ", userTest)

// console.log(props.watched.watched)
    //     const  [myWatchItems, setMyWatchItems] = useState([])

    // async function getMyWatchItems(){
    //     console.log("Get MyWatch Items")
    //     const myWatchItems = await myWatchAPI.getMyWatchItems()
    //     console.log(myWatchItems)
    // }

    return (
        <div className="text-center">
            <h1>MyWatch Page</h1>
            <Container className="bg-light rounded p-3 text-center">
                <Tabs variant="pills"
                    defaultActiveKey="watchedItems"
                    id="fill-tab-example"
                    className="mb-3"
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
                                    comments = {w.comments}
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
                                    comments = {w.comments}
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
                                    comments = {w.comments}
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