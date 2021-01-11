import React from 'react';
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Languages } from '../assets/constants';
import { WeatherInfo } from './WeatherInfo';
import './Header.css';

function Header({ handleSelectLanguage, language }) {

    return (
        <Navbar expand="lg" bg="light" fixed="top" sticky="top" className="justify-content-between header" >

            <Navbar.Brand href="#home"><b>Local news</b></Navbar.Brand>

            <WeatherInfo />

            <DropdownButton id="dropdown-basic-button" title={`Language (${language})`}>
                {
                    Languages.map(lang => (
                        <Dropdown.Item onSelect={() => handleSelectLanguage(lang)} href="#" key={lang}>{lang}</Dropdown.Item>
                    ))
                }
            </DropdownButton>

        </Navbar>
    )
}

export default Header
