import { useState } from 'react';
import axios from 'axios';

export default function SearchNews(searchQuery, selectedLanguage) {
    const [searchingNews, setSearchingNews] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [newsSearchError, setNewsSearchError] = useState(null);

    console.log("im working")
    function search() {
        setSearchResult(null);
        setSearchingNews(true);
        axios({
            method: 'GET',
            url: `https://gnews.io/api/v4/search?token=${process.env.REACT_APP_NEWS_KEY}`,
            params: {
                q: searchQuery,
                lang: selectedLanguage
            }

        }).then(res => {
            setSearchResult(res.data);
            setSearchingNews(false);

        }).catch(e => {
            setNewsSearchError(true);
            setSearchingNews(false)
        })
    }
    search()
    return { searchingNews, searchResult, newsSearchError }
}


