import { Navbar, Nav, Container } from "react-bootstrap"
import { BsHouseFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa'
const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#">AHG</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">
                            <BsHouseFill className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                            Home
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <FaPhone className="me-2" style={{ fontSize: '1.2rem', marginTop: '-5px' }} />
                            Get in Touch
                        </Nav.Link>
                        <Nav.Link href="#action2">011-555-5555</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
