import React from 'react'
import { Breakpoint } from 'react-socks';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsEnvelopeFill, BsInfo } from 'react-icons/bs'
import herobg from '../img/herobg.jpg'
import { NavHashLink } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

//Custom Styles

const heroStyle = {
    backgroundImage: `url(${herobg})`,
    backgroundSize: 'cover',
    fontFamily: 'Urbanist, sansSerif'
}

const overlayStyle = {
    background: '#152238',
    opacity: .5,
    height: '600px',
    position: 'absolute',
    top: 0,
    left: 0
}


const HeroLeftStyle = {
    position: 'relative',
    height: '600px'
}

//Sub components

const HeroLeft = () => {
    return (
        <React.Fragment>
            <Breakpoint customQuery="(max-width:419px)">
                <Container fluid style={{ position: 'relative', maxHeight: '480px' }}>
                    <Container
                        style={{ position: 'relative', zIndex: 50, color: 'white', paddingLeft: '3rem', maxHeight: '480px' }}>
                        <InnerHeroLeft className="innerHeroLeft" />
                    </Container>
                </Container>
            </Breakpoint>

            <Breakpoint customQuery="(min-width:420px)">
                <Container fluid style={HeroLeftStyle}>
                    <OverLay className="overlay" />
                    <Container
                        style={{ position: 'relative', zIndex: 50, color: 'white', paddingLeft: '3rem' }}>
                        <InnerHeroLeft className="innerHeroLeft" />
                    </Container>
                </Container>
            </Breakpoint>
        </React.Fragment>
    )
}

const OverLay = () => {
    return (
        <Container fluid style={overlayStyle}>
        </Container>
    )
}

const InnerHeroLeft = () => {
    return (
        <div>


            <Breakpoint customQuery="(min-width:420px)">
                <div style={{ paddingTop: '15rem' }}>
                    {/* <h2 > Anchor Hawk Group Security</h2> */}
                    <Fade top>
                        <h5 style={{ opacity: .8, letterSpacing: 1, paddingBottom: '1rem' }} >Peace of mind for the safety & security of your business, residence, family or assets, South Africa's Most Comprehensive Security Services.</h5>
                    </Fade>
                </div>

                <NavHashLink to="/#about">

                    <Button variant="outline-secondary" size="md me-2" >

                        <BsInfo className="me-2 mb-1" />
                        Learn More

                    </Button>
                </NavHashLink>
                <NavHashLink to="/#contact">
                    <Button size="md" style={{ background: '#0577B4' }} >
                        <BsEnvelopeFill className="me-2 mb-1" />
                        Get In Touch
                    </Button>

                </NavHashLink>
            </Breakpoint>
            <Breakpoint customQuery="(max-width:419px)">
                <div style={{ padding: '5rem 0' }}>
                    {/* <h2 > Anchor Hawk Group Security</h2> */}
                    <h5 style={{ opacity: .8, letterSpacing: 1, paddingBottom: '1rem' }} >Peace of mind for the safety & security of your business, residence, family or assets, South Africa's Most Comprehensive Security Services.</h5>

                    <NavHashLink to="/#contact">
                        <Button size="md" variant="success" >
                            <BsEnvelopeFill className="me-2 mb-1" />
                            Get In Touch
                        </Button>
                    </NavHashLink>
                </div>
            </Breakpoint>

        </div>
    )
}

//Main Component

const Hero = () => {
    return (
        <div style={heroStyle} id={'hero'}>
            <Container fluid>
                <Breakpoint customQuery="(min-width: 880px)">
                    <Row style={{ height: '600px', marginLeft: '-22px' }}>

                        <Col><HeroLeft /></Col>
                        <Col className="secondCol"></Col>
                    </Row>
                </Breakpoint>

                <Breakpoint customQuery="(max-width: 879px)">
                    <Row style={{ height: '480px', marginLeft: '-22px', marginRight: '-22px' }}>
                        <Col><HeroLeft /></Col>
                    </Row>
                </Breakpoint>

            </Container>
        </div >
    )
}

export default Hero
