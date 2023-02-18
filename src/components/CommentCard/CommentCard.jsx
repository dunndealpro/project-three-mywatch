import Card from 'react-bootstrap/Card';

export default function CommentCard(props) {

    let commentDate = new Date(props.comment.createdAt).toLocaleString()

    return (
        <>
                <div>
                    <Card className='m-1'>
                        <Card.Body>
                            <Card.Text className='fs-5'>
                                {props.comment.content}
                            </Card.Text>
                            <Card.Text>
                                {props.comment.author.name} - {commentDate}
                            </Card.Text>
                            <Card.Text className='card-subtitle text-muted'>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        </>
    )
}