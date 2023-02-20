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
    return sendRequest(`${BASE_URL}/mywatch/`, 'GET', )
}

export function addComment(userInfo, tmdBid, comment){
       return sendRequest(`${BASE_URL}/${tmdBid}/comment`, 'POST', { author: userInfo, content: comment })
}

export function deleteFromMyWatch(tmdBid){
    return sendRequest(`${BASE_URL}/${tmdBid}`, 'DELETE', {tmdBid: tmdBid })

}

export function getComments(tmdBid){
    return sendRequest(`${BASE_URL}/${tmdBid}/comment`, 'GET')

}