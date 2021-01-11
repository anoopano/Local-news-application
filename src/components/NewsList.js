import React from 'react';
import { Spinner } from 'react-bootstrap';
import './NewsList.css';
import NewsCard from './NewsCard';

//component for mapping news to newscard
function NewsList({ news, newsFetchError, loadingNews }) {

    return (
        <div className="ml-3 newsList">

            {loadingNews && <div className="d-flex justify-content-center"><Spinner animation="grow" /></div>}

            {newsFetchError && <div>failed to load news</div>}

            {news &&
                news.articles.map(article => {
                    return (
                        <NewsCard key={article.publishedAt} article={article} />
                    )
                })
            }
        </div>
    )
}

export default NewsList;
