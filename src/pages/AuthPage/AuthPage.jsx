import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm';

import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (

        <>
            <Container className="bg-light mt-4 rounded ">
                <Col className="m-4">
                    <Row className="m-4">
                        <h1 className="m-4 text-center">AuthPage</h1>
                        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>

                        { showSignUp ?
          <SignUpForm className="m-2 " setUser={setUser} />
          :
          <LoginForm className="m-2 " setUser={setUser} />
      }

                        

                    </Row>

                </Col>
            </Container>
        </>
    )
}