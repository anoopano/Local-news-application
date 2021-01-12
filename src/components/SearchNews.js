import React, { useState, useEffect } from 'react';
import './SearchNews.css';
import { Form } from 'react-bootstrap';
import useSearchNews from '../DataFetch/useSearchNews';
import NewsList from './NewsList';

function SearchNews() {

    const [searchQuery, setSearchQuery] = useState("");

    const publishedAt = "publishedAt";

    const {
        searchResult,
        searchingNews,
        newsSearchError
    } = useSearchNews(searchQuery, publishedAt)

    const inputOnChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>

            <Form>
                <Form.Group controlId="formBasicInput">
                    <Form.Control onChange={inputOnChange} value={searchQuery} type="input" placeholder="Search here" className="form" />
                </Form.Group>
            </Form>
            <div className="searchNews">
                {
                    (searchResult && searchQuery !== "") && <NewsList news={searchResult} newsFetchError={false} loadingNews={searchingNews} />

                }
            </div>

        </>
    )
}

export default SearchNews;

