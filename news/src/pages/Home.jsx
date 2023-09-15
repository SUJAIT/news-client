import React from 'react';
import { Navigate } from 'react-router-dom';
import useTitle from '../hooks/Title';

const Home = () => {
useTitle('Home')
         return <Navigate to="/newsdata1/0" replace></Navigate>
};

export default Home;