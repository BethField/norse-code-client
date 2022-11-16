import React from 'react';
import { Login } from '../../components';


const LoginPage = ({themeMode}) => {

    return (
        <main>
            <Login themeMode={themeMode}/>
        </main>
    )
}

export default LoginPage;