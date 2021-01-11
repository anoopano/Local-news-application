import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchNews(selectedLanguage) {

    const [loadingNews, setLoadingNews] = useState(false);
    const [news, setNews] = useState(null);
    const [newsFetchError, setNewsFetchError] = useState(null);

    useEffect(() => {
        setNews(null)
        setLoadingNews(true);
        axios({
            method: 'GET',
            url: `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_NEWS_KEY}`,
            params: { lang: selectedLanguage }

        }).then(res => {
            setNews(res.data);
            setLoadingNews(false);

        }).catch(e => {
            setNewsFetchError(true);
            setLoadingNews(false)
        })
    }, [selectedLanguage])

    return { loadingNews, newsFetchError, news }
}



