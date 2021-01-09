import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import NewsList from './components/NewsList';
import { Container } from 'react-bootstrap';
import { Languages } from './assets/constants';

const App = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

    //function to set language of our choice
    const selectLanguage = (lang) => {
        setSelectedLanguage(lang);
    }

    return (
        <div className="App">
            <Container>
                <Header handleSelectLanguage={selectLanguage} />
                <WeatherInfo />
            </Container>
        </div>
    )
}

export default App;



