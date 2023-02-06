import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SeenSwitch from '../SeenSwitch/SeenSwitch';

export default function PersonCard(props){

    let img
    // console.log( props.watchedCredits)
    // console.log( props.watchedDetails)

    // let mwID = props.cast.id

    // `https://image.tmdb.org/t/p/original/$`
    // let tempimg = props.cast.profile_path || props.cast.backdrop_path
    // tempimg = `https://image.tmdb.org/t/p/original/${tempimg}`

    // console.log("media type?!@?:  ", props.watchedCredits.cast)

    return(
        <>
        <Row >
        {[props.watchedCredits.cast.map((cast)=>(
            <Card  key = {cast.credit_id} className='m-1 bg-light' style={{ width: '10rem' }}>
                
            <Card.Img  className='m-2' src={`https://image.tmdb.org/t/p/original/${img = cast.profile_path || cast.backdrop_path}`} variant="top"/>
            
            <Card.Body>
              <Card.Title className=''>{cast.title || cast.name}</Card.Title>
              <Card.Text>
                {cast.character}
              </Card.Text>
              {/* <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(cast.id, cast.media_type)}>Add to MyWatch </Button> */}
            <SeenSwitch 
            posterUrl={props.posterUrl}
            handleAddToMyWatch = {props.handleAddToMyWatch}
            watchedDetails={props.watchedDetails}
            watchedCredits={props.watchedCredits}
            cast={cast}
            />
            </Card.Body>
          </Card>
        ))]}

        </Row>
       
        </>
    )
}