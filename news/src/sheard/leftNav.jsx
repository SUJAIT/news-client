import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import first from '../Image/1.png';
import second from '../Image/2.png';
import third from '../Image/3.png';



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

 <Row xs={1} md={1} lg={1} className="mt-3 my-4 py-4">

            <Col>
                <Card>
                    <Card.Img variant="top" src={first}/>
                    <Card.Body>
                        <Card.Title>Child Education</Card.Title>
                        <Card.Text>
                            Pre-primary school is fun – serious fun. Music, storytelling, movement, outdoor play, role play and drama give children basic literacy, 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


            <Col>
                <Card>
                    <Card.Img variant="top" src={second}/>
                    <Card.Body>
                        <Card.Title>GPT-4</Card.Title>
                        <Card.Text>
                          Launched on March 14, GPT-4 is the successor to GPT-3 and is the technology behind the viral chatbot ChatGPT.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


            <Col>
                <Card>
                    <Card.Img variant="top" src={third}/>
                    <Card.Body>
                        <Card.Title>Asian Cup Football</Card.Title>
                        <Card.Text>
                          Ticket-holders locked out of Khalifa Stadium before Australia face Japan in Asian Cup final in Qatar
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


            </div>
        </div>
    );
};

export default LeftNav;