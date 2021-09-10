import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid style={{
            background: '#152238',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            color: 'gray', padding: '1rem'
        }}>
            2021  - eyespeedtech
        </Container>
    )
}

export default Footer
