export default function PosterImg(props) {
console.log("Hello")
    let posterUrl = props.url


    console.log(posterUrl)

    // if (props.url) {
    //     posterUrl = `https://image.tmdb.org/t/p/original/${props.url.poster_path}`

    // }

    console.log(posterUrl)


    return (
        <>
            <h1>Isthis working</h1>
            {/* <img width="100%" src={posterUrl} alt="" /> */}
        </>
    )
} 