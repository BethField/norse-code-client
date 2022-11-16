import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar  from '../AppBar'
// import { ThemeProvider } from '@mui/material';
// import lightTheme from "../../theme/lightTheme"
// import darkTheme from "../../theme/darkTheme"
import { useState } from 'react';

const PageWrapper = ({themeMode, setThemeMode}) => {

    // const [themeMode, setThemeMode] = useState(false)

    return( 
        <>
            <header>
                <AppBar themeMode={themeMode} setThemeMode={setThemeMode}></AppBar>
            </header>
            <Outlet themeMode={themeMode}></Outlet>
        </>

    )
};

export default PageWrapper;
