import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const HomeNavBar = () => {
    const { loggedInUser } = useContext(GlobalContext);
    return (
        <Navbar bg="info" expand="lg" variant="dark" style={{ minHeight: '60px' }}>
            <Link to='/'><Navbar.Brand><h4 style={{ margin: '0' }}>Mad Readers</h4></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navbar-link">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
                    <Nav.Link as={Link} to='/manageProduct'>Admin</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    {
                        loggedInUser.name && <p className='text-white p-2 bg-primary roundeda'>{loggedInUser.name}</p>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomeNavBar;