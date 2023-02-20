import Card from 'react-bootstrap/Card';

import SeenSwitch from '../SeenSwitch/SeenSwitch';

export default function PersonCard(props) {

  let img

  return (
    <>
      {[props.watchedCredits.cast.map((cast) => (
        <Card key={cast.credit_id} className='mb-2' style={{ width: '12rem', backgroundColor: 'rgb(250,232,216)' }}>
          <Card.Img src={`https://image.tmdb.org/t/p/original/${img = cast.profile_path || cast.backdrop_path}`} variant="top" />
          <Card.Body >
            <Card.Title className='fs-5'>{cast.title || cast.name}</Card.Title>
            <Card.Text className='fs-6'>
              {cast.character}
            </Card.Text>
            <SeenSwitch
              posterUrl={props.posterUrl}
              handleAddToMyWatch={props.handleAddToMyWatch}
              watchedDetails={props.watchedDetails}
              watchedCredits={props.watchedCredits}
              cast={cast}
            />
          </Card.Body>
        </Card>
      ))]}
    </>
  )
}