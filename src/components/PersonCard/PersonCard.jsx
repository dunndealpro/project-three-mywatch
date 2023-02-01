import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function PersonCard(props){

    let img
    console.log(props.cast[0].name)

    // let mwID = props.cast.id

    // `https://image.tmdb.org/t/p/original/$`
    // let tempimg = props.cast.profile_path || props.cast.backdrop_path
    // tempimg = `https://image.tmdb.org/t/p/original/${tempimg}`

    return(
        <>
        <Row >
        {[props.cast.map((cast)=>(
            <Card className='m-1 bg-light' style={{ width: '10rem' }}>
                
            <Card.Img  className='m-2' src={`https://image.tmdb.org/t/p/original/${img = cast.profile_path || cast.backdrop_path}`} variant="top"/>
            
            <Card.Body>
              <Card.Title className=''>{cast.title || cast.name}</Card.Title>
              <Card.Text>
                {cast.character}
              </Card.Text>
              <Button className="btn-sm" onClick={() => props.handleAddToMyWatch(cast.id, "person")}>Add to MyWatch </Button>
            </Card.Body>
          </Card>
        ))]}

        </Row>
       
        </>
    )
}