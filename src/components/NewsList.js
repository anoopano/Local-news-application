import React from 'react';
import { Spinner, Card } from 'react-bootstrap';
import './NewsList.css'

function NewsList({ news, newsFetchError, loadingNews }) {

    return (
        <div className="ml-3 newsList">

            {loadingNews && <div className="d-flex justify-content-center"><Spinner animation="grow" /></div>}

            {newsFetchError && <div>failed to load news</div>}

            {news &&
                news.articles.map(article => {
                    return (
                        <Card key={article.createdAt} style={{ width: '18rem' }} className="mx-3 newsList__card">
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
                })
            }
        </div>
    )
}

export default NewsList;
