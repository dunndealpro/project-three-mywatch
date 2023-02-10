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

     userTest = props.watched
    console.log("userTEst  ", userTest)

// console.log(props.watched.watched)
    //     const  [myWatchItems, setMyWatchItems] = useState([])

    // async function getMyWatchItems(){
    //     console.log("Get MyWatch Items")
    //     const myWatchItems = await myWatchAPI.getMyWatchItems()
    //     console.log(myWatchItems)
    // }

    return (
        <div className="text-center bg-light rounded pt-5 mt-5 fs-4">
            {/* <h1>MyWatch Page</h1> */}
            <Container className="bg-light rounded p-3 text-center">
                <Tabs variant="pills"
                    defaultActiveKey="watchedItems"
                    id="fill-tab-example"
                    className="mb-3 bg-dark p-2 rounded"
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
                                    display = {"I have seen this movie"}
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
                                    comments = {w.comments}
                                    display = {"I have not seen this movie"}
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
                                    comments = {w.comments}
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