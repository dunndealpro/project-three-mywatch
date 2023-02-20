import { Component } from "react"
import { signUp } from '../../utilities/users-service'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try {
            const formData = { ...this.state };
            delete formData.confirm;
            delete formData.error;
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            console.log("This props brah? ", user)
            // Update user state with user
            this.props.setUser(user);
        } catch {
            // Invalid signup
            this.setState({
                error: 'Sign Up Failed - Try Again'
            });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <Container className="p-2">
                    <Row>
                        <Col>
                            <Form autoComplete="off" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control type="password" placeholder="Confirm Password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                                </Form.Group>
                                <Button className="" variant="primary" type="submit" disabled={disable}>Sign Up</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}