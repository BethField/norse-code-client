import React from 'react';
import { Login } from '../../components';


const LoginPage = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const login = {username: data.get('username'), password: data.get('password')};

        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(login)
        }        
    }

    return (
        <main>
            <Login />
        </main>
    )
}

export default LoginPage;