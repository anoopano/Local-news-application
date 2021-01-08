import React from 'react';
import { Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Languages } from '../assets/constants';

function Header({ handleSelectLanguage }) {

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" className="justify-content-between" >

                <Navbar.Brand href="#home">Local news</Navbar.Brand>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>

                <DropdownButton id="dropdown-basic-button" title="Select language">
                    {
                        Languages.map(lang => (
                            <Dropdown.Item onSelect={() => handleSelectLanguage(lang)} href="#" key={lang}>{lang}</Dropdown.Item>
                        ))
                    }
                </DropdownButton>

            </Navbar>
        </>
    )
}

export default Header
