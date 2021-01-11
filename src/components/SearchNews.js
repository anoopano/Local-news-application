import React, { useState, useEffect } from 'react';
import './SearchNews.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function SearchNews(selectedLanguage) {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchingNews, setSearchingNews] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [newsSearchError, setNewsSearchError] = useState(null);


    const search = (searchQuery) => {
        setSearchingNews(true);

        let cancel;
        if (cancel !== undefined) {
            cancel.cancel();
        }

        axios({
            method: 'GET',
            url: `https://gnews.io/api/v4/search?token=${process.env.REACT_APP_NEWS_KEY}`,
            params: { q: searchQuery },
            cancelToken: axios.CancelToken((c) => cancel = c)
        }).then(
            res => {
                console.log(res.data)
            }).catch(e => {
                if (axios.isCancel(e)) return
            })
    };

    console.log(searchResult)
    const inputOnChange = (e) => {
        setSearchQuery(e.target.value)
        search(e.target.value);
    }

    return (
        <div className="searchNews">

            <Form>
                <Form.Group controlId="formBasicInput">
                    <Form.Control onChange={inputOnChange} value={searchQuery} type="input" placeholder="Search here" className="ml-3" />
                </Form.Group>
            </Form>

        </div>
    )
}

export default SearchNews;


/*

 var CancelToken = axios.CancelToken;
        let cancel;
        axios({
            method: 'GET',
            url: `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_NEWS_KEY}`,
            params: { lang: selectedLanguage, q: searchQuery },
            cancelToken: new CancelToken(c => cancel = c)

        }).then(res => {
            setSearchResult(res.data);
            setSearchingNews(false);

        }).catch(e => {
            if (axios.isCancel(e)) return;
            setNewsSearchError(true);
            setSearchingNews(false);

        })
        return () => cancel()

 async function searchNewsFn() {

        se
        axios({
            method: 'GET',
            url: `https://gnews.io/api/v4/search?token=${process.env.REACT_APP_NEWS_KEY}`,
            params: {
                q: searchQuery
            },
            cancelToken: axios.CancelToken(c => cancel = c)
        }).then(
            res => {
                console.log(res.data)
            }
        ).catch(e => {
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    }

    const inputOnChange = e => {
        setSearchQuery(e.target.value);
        searchNewsFn(e.target.value)
    }


*/