import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Breakpoint } from 'react-socks'

//Styles

const rowStyle = {
    padding: '6.5rem 4rem',
    display: 'flex',
    alignItems: 'center'
}


const mobileRowstyle = {
    padding: '6.5rem 4rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}

//Responsive sub component

const ForMobile = () => {
    return (
        <Breakpoint customQuery="(max-width: 900px)">
            <Row style={mobileRowstyle} >
                <Col>
                    <h2 style={{ color: 'white', paddingBottom: '2rem' }}>Leave us your details and we will be in touch to discuss if we are the best fit for you.</h2>
                </Col>
                <Col>
                    <form>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your surname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your cellphone No" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Drop us a line" />
                            </Form.Group>
                            <div>
                                <Button type='submit' style={{ width: '100%' }}>Submit</Button>
                            </div>
                            <Form.Text className="text-muted" style={{ fontSize: '10px' }}>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form>
                    </form>
                </Col>
            </Row>
        </Breakpoint>
    )
}

const Contact = () => {

    return (
        <Container fluid style={{ background: '#23395d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Breakpoint customQuery="(min-width:901px)">
                <Row style={rowStyle} >
                    <Col>
                        <h1 style={{ color: 'white' }}>Leave us your details and we will be in touch to discuss if we are the best fit for you.</h1>
                    </Col>
                    <Col>
                        <form>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your surname" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your cellphone No" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="Drop us a line" />
                                </Form.Group>
                                <div>
                                    <Button type='submit' style={{ width: '50%' }}>Submit</Button>
                                </div>
                                <Form.Text className="text-muted" style={{ fontSize: '10px' }}>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form>
                        </form>
                    </Col>
                </Row>
            </Breakpoint >
            <ForMobile />
        </Container>

    )
}

export default Contact