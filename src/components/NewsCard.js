import React from 'react';
import { Card } from 'react-bootstrap';
import './NewsCard.css';

function NewsCard({article}) {
    return (
        <Card className="mx-3 newsCard">
            <a href={article.url} >
                <Card.Img variant="top" src={article.image} className="p-2"/>
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
