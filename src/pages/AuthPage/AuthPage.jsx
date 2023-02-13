import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'




export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (

        <>
                <Row className="m-2">
                    <Col lg={6} bg-dark className="text-center mx-auto">
            <Container className="bg-light  mx-auto rounded align-middle ">
                        <h1 className="p-2 text-center">Welcome to MyWatch!</h1>
                        <h2 className="p-2 text-center"> Please Login or Sign up!</h2>
                        <Button variant="secondary" className="p-2 mx-auto w-50" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>

                        {showSignUp ?
                            <SignUpForm className=" " setUser={setUser} />
                            :
                            <LoginForm className=" " setUser={setUser} />
                        }
            </Container>
                    </Col>
                </Row>
        </>
    )
}