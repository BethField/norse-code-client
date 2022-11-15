import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar  from '../AppBar'
import { ThemeProvider } from '@mui/material';
import lightTheme from "../../theme/lightTheme"
import darkTheme from "../../theme/darkTheme"
import { useState } from 'react';

const PageWrapper = () => {

    const [themeMode, setThemeMode] = useState(false)

    return( 
        <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
            <header>
                <AppBar themeMode={themeMode} setThemeMode={setThemeMode}></AppBar>
            </header>
            <Outlet></Outlet>
        </ThemeProvider>
    )
};

export default PageWrapper;
