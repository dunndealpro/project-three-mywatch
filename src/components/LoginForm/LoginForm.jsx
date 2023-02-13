import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'




export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        console.log('user')
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            console.log(user)
            setUser(user);
        } catch {
            console.log('user')
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <Container className="p-2" >
                <Row>
                    <Col >
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Enter Password" name="password" value={credentials.password} onChange={handleChange} required />
                            </Form.Group>
                            <Button className="" variant="primary " type="submit" >Login</Button>
                            <p className="error-message">&nbsp;{error}</p>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>
    );
}