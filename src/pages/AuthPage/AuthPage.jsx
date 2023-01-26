import SignUpForm from "../../components/SignUpForm/SignUpForm"

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



export default function AuthPage() {

    return (

        <>
            <Container className="bg-light mt-4 rounded ">
                <Col className="m-4">
                <Row className="m-4">
                    <h1 className="m-4 text-center">AuthPage</h1>

                    <SignUpForm className="m-2 "/>

                </Row>

                </Col>
            </Container>
        </>
    )
}