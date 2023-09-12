import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bg from '../Image/bg.png';
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
          <button type="button" class="btn btn-outline-secondary mb-2"><FcGoogle/> Login with Google  </button>
          <button type="button" class="btn btn-outline-secondary"><BsFacebook className='btn-primary'/> Login with Facbook</button>
     <div>
              <h4>Find us on</h4>
         <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
       
     </div>
   <Qzone></Qzone>
       <div>
        <img src={bg} alt="" />
       </div>
       
           
   

        </div>
       
    );
};

export default RightNav;