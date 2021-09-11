import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsHouseFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { Breakpoint } from "react-socks";
import ahg_logo from '../img/ahg_logo.png';
import { NavHashLink } from 'react-router-hash-link';


const Navigation = () => {
    return (
        <Navbar style={{ background: '#152238', fontFamily: 'Urbanist, sansSerif' }} expand="lg" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand>
                    <NavHashLink to="/#hero">
                        <img src={ahg_logo} alt="anchor hawk logo" style={{ maxHeight: '40px' }} />
                    </NavHashLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'end' }}>
                    <Breakpoint customQuery="(max-width: 879px)">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px', background: '#23395d', borderRadius: '1rem', textAlign: 'center', color: 'black' }}
                            navbarScroll
                        >

                            <NavHashLink to="/#hero" style={{
                                transition: 'color .15s ease-in-out',
                                backgroundColor: '.15s ease-in-out',
                                borderColor: '.15s ease-in-out',
                                display: 'block',
                                padding: '.5rem 1rem',
                                textDecoration: 'none',
                                color: 'white',
                                opacity: .7
                            }}>
                                <BsHouseFill className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                                Home
                            </NavHashLink>
                            <NavHashLink to="/#contact" style={{
                                transition: 'color .15s ease-in-out',
                                backgroundColor: '.15s ease-in-out',
                                borderColor: '.15s ease-in-out',
                                display: 'block',
                                padding: '.5rem 1rem',
                                textDecoration: 'none',
                                color: 'white',
                                opacity: .7
                            }}>
                                <FaRegEnvelope className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                                Get in Touch
                            </NavHashLink>
                            <Nav.Link>
                                <FaPhone className="me-2" style={{ fontSize: '1.1rem', marginTop: '-5px' }} />
                                011-555-5555</Nav.Link>
                        </Nav>
                    </Breakpoint>

                    <Breakpoint customQuery="(min-width: 880px)">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <NavHashLink to="/#hero" style={{
                                transition: 'color .15s ease-in-out',
                                backgroundColor: '.15s ease-in-out',
                                borderColor: '.15s ease-in-out',
                                display: 'block',
                                padding: '.5rem 1rem',
                                textDecoration: 'none',
                                color: 'white',
                                opacity: .7
                            }}>

                                <BsHouseFill className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                                Home

                            </NavHashLink>

                            <NavHashLink to="/#contact" style={{
                                transition: 'color .15s ease-in-out',
                                backgroundColor: '.15s ease-in-out',
                                borderColor: '.15s ease-in-out',
                                display: 'block',
                                padding: '.5rem 1rem',
                                textDecoration: 'none',
                                color: 'white',
                                opacity: .7
                            }}>
                                <FaRegEnvelope className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                                Get in Touch
                            </NavHashLink>
                            <Nav.Link href="#">
                                <FaPhone className="me-2" style={{ fontSize: '1.1rem', marginTop: '-5px' }} />
                                011-555-5555</Nav.Link>
                        </Nav>
                    </Breakpoint>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation
