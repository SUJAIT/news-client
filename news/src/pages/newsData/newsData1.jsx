import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsData1 = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div className='mt-5'>
       
        
        {
           categoryNews.map(news => <NewsCard
           key={news._id}
           news={news}
           ></NewsCard>) 
        }
        </div>
    );
};

export default NewsData1;