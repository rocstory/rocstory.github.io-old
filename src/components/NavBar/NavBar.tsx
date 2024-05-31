import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';

function NavBar() {
    return (
        <Navbar sticky={`top`} className={`rs-navbar`} >
            <Container>
                <Navbar.Brand className={`disabled`}>Malik Roc</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>Contact Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;