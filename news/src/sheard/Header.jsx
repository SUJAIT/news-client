import moment from 'moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import logo from "../Image/logo.png";
import NavBar from './NavBar';

const Header = () => {
    return (//React Bootstrap  Container Use Korar krona 2 pasa kisuta place sara disia
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo}></img>
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <button type="button" class="btn btn-danger"><small>Latest News</small></button> <Marquee speed={100} >
                   Sri Lanka were bowled out in 15.2 overs after they elected to bat first in Colombo, but Siraj wreaked havoc with figures of 6-21
                </Marquee>
            </div>

   <NavBar></NavBar>

        </Container>
    );
};

export default Header;