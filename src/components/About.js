import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import sec from '../img/sec.jpg'
import { Breakpoint } from 'react-socks'
import { Fade } from 'react-reveal';

//Styles

const rowStyle = {
    margin: '6.5rem 4rem',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Urbanist, sansSerif'
}

const imgStyle = {
    height: '300px',
    maxWidth: '100%',
    borderRadius: '8px',
    boxShadow: '-10px 5px 30px rgba(0, 0, 0, 0.5)',
}

const About = () => {
    return (
        <Container>
            <Breakpoint customQuery="(min-width: 991px)">
                <Row id={'about'}
                    style={rowStyle}
                    className="bt-3 pb-3">
                    <Fade top>
                        <h2 style={{ textAlign: 'center', paddingBottom: '2rem', color: '#23395d', textTransform: 'uppercase' }}>The Most Affordable Security Solution in Town</h2>
                    </Fade>
                    <Col>
                        <img src={sec} alt="feature" style={imgStyle} />
                    </Col>
                    <Col style={{ paddingLeft: '2rem' }}>
                        <p>It's our responsability to constently provide the highest quality in Security Services. Commercial and Residential Security; This is about doing what is right and safe for you.</p>
                        <p>Our rates varies from R8,000.00 per Guards/Month depending  on the location and what needs to be secured.</p>
                        <p>Regardless of the terms and conditions, all our guards are devoted to insuring that security and protection is not a concern for our clients.</p>

                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 990px)">
                <Row style={{ display: 'flex', flexDirection: 'column', margin: '2.5rem 0', texttAlign: 'center', fontFamily: 'Urbanist, sansSerif' }}>
                    <h1 style={{ textAlign: 'center', paddingBottom: '2rem' }}>The Most Affordable Security Solution in Town</h1>

                    <Col>
                        <img src={sec} alt="feature"
                            style={{ borderRadius: '5px', maxWidth: '100%', margin: '0 auto' }} />
                    </Col>
                    <Col>
                        <p style={{ margin: '1.5rem 0' }}>
                            It's our responsability to constently provide the highest quality in Security Services. Commercial and Residential Security; This is about doing what is right and safe for you.
                            Our rates varies from R8,000.00 per Guards/Month depending  on the location and what needs to be secured.
                            Regardless of the terms and conditions, all our guards are devoted to insuring that security and protection is not a concern for our clients.
                        </p>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Breakpoint>
        </Container>
    )
}

export default About
