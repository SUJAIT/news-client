import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const LeftNav = () => {
    const [news, setNews] = useState([]);  //setNwes a data patia dua hoisa,akon news dia sob data pabo
    useEffect(() => {
        fetch('https://newsbackend-kv3rcu0vd-mdsujait2004-gmailcom.vercel.app/news')
            .then(res => res.json())
            .then(data => setNews(data)) // UseEffact Use kora jason response dia  data load kora data ta setNews a patia dibo...
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    news.map(newsData => <p key={newsData.id}>
                        <Link to={`/newsdata1/${newsData.id}`} className='text-black text-decoration-none'>{newsData.name}</Link>

                    </p>)
                }

            </div>
        </div>
    );
};

export default LeftNav;