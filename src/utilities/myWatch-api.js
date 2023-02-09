import sendRequest from "./send-request";

const BASE_URL = '/api/mywatch';

// const payDirt = [{movieId},{ movieTitle}, {check}]

export function getMyWatch(searchMyWatch){
    console.log("Get My Watch db results", searchMyWatch)
    return sendRequest (`${BASE_URL}/`, 'PUT', {tmdBid: searchMyWatch})
}

export function addToMyWatch(mwID, mwName, mwMediaType, mwTitle, mwHaveSeen){
    console.log('add to mywatch step 2 ', mwID, mwName, mwMediaType, mwTitle,  mwHaveSeen)
    
    return sendRequest(`${BASE_URL}/mywatch/${mwID}`, 'POST', {id: mwID, mwName: mwName, mwMediaType: mwMediaType, mwTitle: mwTitle,  mwHaveSeen: mwHaveSeen} )
}

export function getWatched(){
    console.log("My Watch step 2")
    return sendRequest(`${BASE_URL}/mywatch/`, 'GET', )
}

export function addComment(userInfo, tmdBid, comment){
    console.log("Add Comment Step 2")
    console.log(userInfo)
    console.log( comment)
    return sendRequest(`${BASE_URL}/${tmdBid}/comment`, 'POST', { author: userInfo, content: comment })
}

export function deleteFromMyWatch(tmdBid){
    console.log("remove from mywatch step 2", tmdBid)
    return sendRequest(`${BASE_URL}/${tmdBid}`, 'DELETE', {tmdBid: tmdBid })

}

export function getComments(tmdBid){
    console.log("still getting comments")
    return sendRequest(`${BASE_URL}/${tmdBid}/comment`, 'GET')

}

// export function getNextWatchMovies(){
//     console.log("Next Watch step 2")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

// export function getMyMovies(){
//     console.log("My Movies stuff -")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

