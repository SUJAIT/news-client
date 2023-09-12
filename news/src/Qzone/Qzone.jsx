import React from 'react';
import qzone1 from '../Image/qZone1.png';
import qzone2 from '../Image/qZone2.png';
import qzone3 from '../Image/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4'>
            <h4>Q-Zone</h4>
            <div>
                <img id='img1' src={qzone1} alt="" />
                <img id='img1' src={qzone2} alt="" />
                <img id='img1' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;