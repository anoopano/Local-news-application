import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSearchNews(searchQuery, publishedAt) {

    const [searchingNews, setSearchingNews] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [newsSearchError, setNewsSearchError] = useState(false);

    const URL = `https://gnews.io/api/v4/search?token=${process.env.REACT_APP_NEWS_KEY}`

    useEffect(() => {
        setSearchResult(null);

        if(searchQuery !=="") {

            const delayDebounceFn = setTimeout(() => {
                setSearchingNews(true)
                axios({
                    method: 'GET',
                    url: URL,
                    params: { q: searchQuery, sortby: publishedAt, },
    
                }).then(res => {
                    console.log(res.data);
                    setSearchResult(res.data);
                    setSearchingNews(false)
                }).catch(e => {
                    setSearchingNews(false);
                    setNewsSearchError(true)
                    console.log(e.message)
                })
            }, 3000)
            return () => clearTimeout(delayDebounceFn)
        }
        
    }, [searchQuery, publishedAt, URL])

    return { searchResult, searchingNews, newsSearchError }
}
