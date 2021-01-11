import React from 'react';
import { Card } from 'react-bootstrap';
import './NewsCard.css';

function NewsCard({article}) {
    return (
        <Card key={article.createdAt} style={{ width: '18rem' }} className="mx-3 newsCard">
            <a href={article.url} >
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                    <Card.Title><b>{article.title}</b></Card.Title>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default NewsCard
