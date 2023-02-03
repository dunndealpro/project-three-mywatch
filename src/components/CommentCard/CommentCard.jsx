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


const date = new Date()
// let commentDateTemp = `${commentDate.toLocaleString()}`

let commentDate

let commentAuthor
// console.log(commentDateTemp)
// props.comments.map((comment) => (
//  commentDate = comment.createAt.toLocaleString  
// ))


    return (
        <>
            <Container>
                {props.comments.map((comment) => (
                    <div>
                        <Card>
                            <Card.Body>
                                
                                <Card.Text className='fs-5'>
                                    {comment.content}
                                </Card.Text>
                                <Card.Text>
                                    {commentAuthor = comment.author}
                                </Card.Text>
                                <Card.Text className='card-subtitle text-muted'>
                                    {commentDate = new Date (comment.createdAt).toLocaleString()}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>
        </>
    )
}