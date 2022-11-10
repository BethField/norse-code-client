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
        </>
    )
};

export default PageWrapper;
