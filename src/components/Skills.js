import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Breakpoint } from 'react-socks'
import pic_2 from '../img/pic_2.svg'
import proc from '../img/proc.svg'
import profile from '../img/profile.svg'
import { Flip } from 'react-reveal'

// Data

const datas = [
    {
        id: 1,
        icon: pic_2,
        title: 'First Step',
        text: 'We will get in touch with you to have thorough understanding of your needs in comparison to our security expert advisors. This will take 2-5 minutes over a phone call.'
    },
    {
        id: 2,
        icon: proc,
        title: 'second step',
        text: 'After consultation over the phone with one of our dedicated area specialists, we will run a site inspection to establish a security level in the area. This happens within 12 hours and takes about 30 minutes to 1 hour on the location.'
    },
    {
        id: 3,
        icon: profile,
        title: 'Third step',
        text: 'You will be assigned security guards accordingly and the dafety of your property will now be in our hands and our full responsibility.'
    }
]

const SingleCard = () => {

    const card = datas.map((item) => {
        return (
            <Card style={cardStyle} key={item.id} className="cards mt-4">
                <Flip top>
                    <Card.Body>
                        <img src={item.icon} alt="profile" style={{ height: '50px', color: 'white', opacity: .8 }}
                            className="mb-4" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text style={{ opacity: .8 }}>{item.text}</Card.Text>
                    </Card.Body>
                </Flip>
            </Card>
        )
    })

    return card
}


//Custom Style

const skillStyle = {
    backgroundColor: '#23395d',
    height: '400px',
    alignItems: 'center',
    display: 'flex'
}

const skillStyleMobile = {
    backgroundColor: '#23395d',
    height: 'auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
}


const cardStyle = {
    width: '100%',
    background: '#23395d',
    color: 'white',
    border: 'none',
    textAlign: 'center',
    justifyContent: 'center',
    WebkitBoxShadow: '0px 10px 13px -7px #000000, -12px 23px 30px -4px rgba(0,0,0,0.51)',
    Boxshadow: '0px 10px 13px -7px #000000, -12px 23px 30px -4px rgba(0,0,0,0.51)',
    marginLeft: '.3rem'
}


const Skills = () => {
    return (
        <div>
            <Breakpoint customQuery="(min-width:501px)">
                <Container fluid style={skillStyle}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col className="d-flex justify-content-center" >
                                <SingleCard />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Breakpoint>
            <Breakpoint customQuery="(max-width:500px)">
                <Container fluid style={skillStyleMobile}>
                    <Container>
                        <Row className="justify-content-center pt-5 pb-5">
                            <Col>
                                <SingleCard />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Breakpoint>
        </div>

    )
}

export default Skills
