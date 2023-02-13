import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SummaryText from '../SummaryText/SummaryText';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function CommentCard(props) {
    console.log(props.comment.content)

    const date = new Date()
    // let commentDateTemp = `${commentDate.toLocaleString()}`

    let commentDate = new Date(props.comment.createdAt).toLocaleString()
    
    console.log(commentDate)

    let commentAuthor
    // console.log(commentDateTemp)
    // props.comments.map((comment) => (
    //  commentDate = comment.createAt.toLocaleString  
    // ))


    return (
        <>
            {/* <Container> */}

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
                                {/* {props.comment.createdAt.toLocaleString() } */}
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            {/* </Container> */}
        </>
    )
}