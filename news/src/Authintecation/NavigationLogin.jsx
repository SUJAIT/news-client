import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from '../sheard/NavBar';

const NavigationLogin = () => {
    return (
        <div>
            <Container>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </Container>

        </div>
    );
};

export default NavigationLogin;