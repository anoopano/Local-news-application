import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSearchNews(searchQuery) {

    const [searchingNews, setSearchingNews] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [newsSearchError, setNewsSearchError] = useState(null);

    useEffect(() => {
        var cancel;
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
    }, [searchQuery])

    return null
}
