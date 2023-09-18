import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineWhatsApp } from 'react-icons/Ai';
import { PiPhoneCallDuotone } from 'react-icons/Pi';
import { SlEnvolopeLetter } from 'react-icons/Sl';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>   <footer className='bg-dark text-white pt-5 pb-4'>
            <div className='container text-center text-md-left'>
              <div className='row text-center text-md-left'>
               <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Dragon News</h5>
                <p>Dragon News is a leading news publication dedicated to delivering accurate, reliable, and timely news to a global audience. With a commitment to journalistic integrity and excellence, we have established ourselves as a trusted source of information since our inception.</p>
                </div> 
                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                   <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Connect</h5>
                <p>
                    <a href="#" className='text-white' id='footer-a'>Contact Us</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Apps</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Podcasts</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Submit a Tip</a>
                </p>

                </div>
            
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercse mb-4 font-weight-bold text-warning'>Our Network</h5>
                                    <p>
                    <a href="#" className='text-white' id='footer-a'>Dragon Center</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Dragon Institute</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Dragon Forum</a>
                </p>

                <p>
                    <a href="#" className='text-white' id='footer-a'>Drgon Hotel</a>
                </p>
                    </div>
<div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact</h5>
<p>
    <FaHome/> Chittagon,Kulsi 06,Road:2
</p>

<p>
    <SlEnvolopeLetter/> dragonnews@gmail.com
</p>

<p>
    <PiPhoneCallDuotone/> +09920929666
</p>

<p>
    <AiOutlineWhatsApp/> 01627947557
</p>
</div>
<hr className='mb-4' />
<div className='row align-items-center'>
    <div className='col-md-7 col-lg-8'>
        <p>Copyright 2023 All rights reserved by:</p>
        <a href="#" id='footer-a'>
            <strong className='text-warning'>The Providers</strong>
        </a>
    </div>
    <div className='col-md-5 col-lg-4'>
        <div className='text-center text-md-right'>
            <ul className='list-unstyled list-inline'>
             <li className='list-inline-item'>
                <a href="#" id='footer-a' className='btn-floating btn-sm text-white'>
                    <FaFacebook/>
                </a>
             </li>
             <li className='list-inline-item'>
                <a href="#" id='footer-a' className='btn-floating btn-sm text-white'>
                    <FaTwitter/>
                </a>
             </li>
             <li className='list-inline-item'>
                <a href="#" id='footer-a' className='btn-floating btn-sm text-white'>
                    <FaLinkedin/>
                </a>
             </li>
             <li className='list-inline-item'>
                <a href="#" id='footer-a' className='btn-floating btn-sm text-white'>
                    <FaInstagram/>
                </a>
             </li>
             <li className='list-inline-item'>
                <a href="#" id='footer-a' className='btn-floating btn-sm text-white'>
                    <FaTelegram/>
                </a>
             </li>
            </ul>
        </div>
    </div>
</div>
              </div>
            </div>
           </footer></Container>
        
      
    );
};

export default Footer;