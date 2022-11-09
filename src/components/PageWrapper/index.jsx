import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar  from '../AppBar'

const PageWrapper = () => {
    return( 
        <>
            <header>
                <AppBar></AppBar>
            </header>
            <Outlet></Outlet>
            <footer>Norse Code 2022</footer>
        </>
    )
};

export default PageWrapper;
