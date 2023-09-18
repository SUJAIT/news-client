import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { CgProfile } from 'react-icons/Cg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContextProbider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                    
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link><Link id='a' to="/newsdata1/0">Home</Link></Nav.Link>
                                <Nav.Link><Link id='a'>About</Link></Nav.Link>
                                <Nav.Link><Link id='a'>Career</Link></Nav.Link>
                              
                            </Nav>
                            <Nav>
                                {/* <img src={user._UserImpl.photoURL} alt="" /> */}
                                {user ? <Nav.Link hef="#deets"><CgProfile id='profile-icon'/></Nav.Link>:<p></p>}
                          
                            { user ? <div><Button variant='secondary' onClick={handleLogOut} >LogOut</Button> </div> :<div><Link to="/login"> <Button variant='secondary' >Login</Button></Link> </div>     }
                              
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

    );
};

export default NavBar;