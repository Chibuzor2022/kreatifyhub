import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
// import logo2 from '../assets/logo2.png';
import logo from '../assets/logo.png';



const Header = () => {
  return (

    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>
            {/* <img src={logo2} alt="kreatify" style={{width:'100px'}} /> */}
            <img src={logo} alt="kreatify"/>
            Kreatify Hub</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'> 
              <LinkContainer to='/cart'><Nav.Link > <FaShoppingCart/>Cart</Nav.Link></LinkContainer>
              <LinkContainer to='/login'><Nav.Link ><FaUser/>Sign In</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
       
  )
}

export default Header
