import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import sec from '../img/sec.jpg'
import { Breakpoint } from 'react-socks'



//Styles

const rowStyle = {
    margin: '6.5rem 4rem',
    display: 'flex',
    alignItems: 'center'
}

const imgStyle = {
    height: '300px',
    maxWidth: '100%',
    borderRadius: '8px',
    boxShadow: '-10px 5px 30px rgba(0, 0, 0, 0.5)',

}

const imgStyleMobile = {
    margin: '0 auto',
    height: '300px',
    maxWidth: '100%',
    borderRadius: '8px',
    boxShadow: '-10px 5px 30px rgba(0, 0, 0, 0.5)'
}

const About = () => {
    return (
        <Container>
            <Breakpoint customQuery="(min-width: 991px)">
                <Row
                    style={rowStyle}
                    className="bt-3 pb-3">
                    <h1 style={{ textAlign: 'center', paddingBottom: '2rem' }}>The Best Security Solution in Town</h1>

                    <Col>
                        <img src={sec} alt="feature" style={imgStyle} />
                    </Col>
                    <Col>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 990px)">
                <Row style={{ display: 'flex', flexDirection: 'column', margin: '2.5rem 0', texttAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center', paddingBottom: '2rem' }}>The Best Security Solution in Town</h1>

                    <Col>
                        <img src={sec} alt="feature"
                            style={{ borderRadius: '5px', maxWidth: '100%', margin: '0 auto' }} />
                    </Col>
                    <Col>
                        <p style={{ margin: '1.5rem 0' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Breakpoint>
        </Container>
    )
}

export default About
