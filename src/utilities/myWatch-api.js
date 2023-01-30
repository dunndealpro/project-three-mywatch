import sendRequest from "./send-request";

const BASE_URL = '/api/mywatch';

// const payDirt = [{movieId},{ movieTitle}, {check}]

export function addToMyWatch(mwID, mwMediaType, mwTitle, mwName, mwHaveSeen){
    console.log('add to mywatch step 2 ', mwID, mwMediaType, mwTitle, mwName, mwHaveSeen)
    
    return sendRequest(`${BASE_URL}/mywatch/${mwID}`, 'POST', {id: mwID, mwMediaType:  mwMediaType, mwTitle: mwTitle, mwName: mwName, mwHaveSeen: mwHaveSeen} )
}

export function getMyWatchItems(){
    console.log("My Watch step 2")
    return sendRequest(`${BASE_URL}/mywatch/`, 'GET',  )
}

// export function getNextWatchMovies(){
//     console.log("Next Watch step 2")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

// export function getMyMovies(){
//     console.log("My Movies stuff -")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

