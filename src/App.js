import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import { Languages } from './assets/constants';
import useFetchNews from './DataFetch/useFetchNews';
import SearchNews from './components/SearchNews';

const App = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

    //getting data from useFetchNews hook
    const {
        news,
        loadingNews,
        newsFetchError
    } = useFetchNews(selectedLanguage);

    //function to set language of our choice
    const selectLanguage = (lang) => {
        setSelectedLanguage(lang);
    }

    return (
        <div className="app">

            <Header handleSelectLanguage={selectLanguage} language={selectedLanguage} />

            <div className="app__description">
                <h2>Local News</h2>
                <p>Local news is a place where you can <br />explore latest news on your local language</p>
            </div>

            <SearchNews />

            <h3 className="app__headline">Top headlines</h3>

            <NewsList news={news} loadingNews={loadingNews} newsFetchError={newsFetchError} />

        </div>
    )
}

export default App;



