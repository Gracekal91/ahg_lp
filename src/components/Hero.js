import React from 'react'
import { Breakpoint } from 'react-socks';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsEnvelopeFill, BsInfo } from 'react-icons/bs'
import herobg from '../img/herobg.jpg'

//Set defaults Breakpoints

// setDefaultBreakpoints([
//     { lg: 1200 },
//     { m: 880 },
//     { s: 420 },
// ]);

//Custom Styles

const heroStyle = {
    backgroundImage: `url(${herobg})`,
    backgroundSize: 'cover'
}

const overlayStyle = {
    background: 'blue',
    opacity: .2,
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
        <Container fluid style={HeroLeftStyle}>
            <OverLay className="overlay" />
            <Container
                style={{ position: 'relative', zIndex: 50, color: 'white', paddingLeft: '3rem' }}>
                <InnerHeroLeft className="innerHeroLeft" />
            </Container>

        </Container>
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
        <div style={{ paddingTop: '15rem' }}>
            <h1 > Security Guru</h1>
            <p style={{ opacity: .6 }} >Hello we Got your back - Regarding security issues - this is a placeholder</p>

            <Breakpoint customQuery="(min-width:420px)">
                <Button variant="outline-secondary" size="md me-2" >
                    <BsInfo className="me-2 mb-1" />
                    Learn More
                </Button>

                <Button size="md" variant="success" >
                    <BsEnvelopeFill className="me-2 mb-1" />
                    Get In Touch
                </Button>
            </Breakpoint>
            <Breakpoint customQuery="(max-width:419px)">
                <Button size="md" variant="success" >
                    <BsEnvelopeFill className="me-2 mb-1" />
                    Get In Touch
                </Button>
            </Breakpoint>


        </div>
    )
}

//Main Component

const Hero = () => {
    return (
        <div style={heroStyle} >
            <Container fluid>
                <Breakpoint customQuery="(min-width: 880px)">
                    <Row style={{ height: '600px', marginLeft: '-22px' }}>
                        <Col><HeroLeft /></Col>
                        <Col className="secondCol">2 of 2</Col>
                    </Row>
                </Breakpoint>

                <Breakpoint customQuery="(max-width: 879px)">
                    <Row style={{ height: '600px', marginLeft: '-22px' }}>
                        <Col><HeroLeft /></Col>
                    </Row>
                </Breakpoint>
                <Breakpoint customQuery="(max-width: 420px)">
                    <Row style={{ height: '600px', marginLeft: '-22px' }}>
                        <Col><HeroLeft /></Col>
                    </Row>
                </Breakpoint>
            </Container>
        </div >
    )
}

export default Hero
