import sendRequest from "./send-request";

const BASE_URL = '/api/mywatch';

// const payDirt = [{movieId},{ movieTitle}, {check}]

export function addToMyWatch(selectId, selectTitle, check){
    console.log('add to mywatch step 2 ', selectId, selectTitle, check)
    
    return sendRequest(`${BASE_URL}/mywatch/${selectId}`, 'POST' )
}

// export function getAlreadyWatchedMovies(){
//     console.log("Already Watch step 2")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

// export function getNextWatchMovies(){
//     console.log("Next Watch step 2")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

// export function getMyMovies(){
//     console.log("My Movies stuff -")
//     return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
// }

