import { useState, useEffect } from "react"
import * as myWatchAPI from "../../utilities/myWatch-api"

export default function MyWatchPage(){

    const  [myWatchItems, setMyWatchItems] = useState([])

async function getMyWatchItems(){
    console.log("Get MyWatch Items")
    const myWatchItems = await myWatchAPI.getMyWatchItems()
    console.log(myWatchItems)
}

    return(
        <h1>MyWatch Page</h1>

    )
}