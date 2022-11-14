import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Scores() {
    const [username, setUsername] = useState();

    useEffect(() => {
        async function getUser() {
            const userId = Cookies.get('userId');
            if (userId === undefined) {
                window.location.href = "/login";
            } else {
                const response = await fetch("http://localhost:3001/users/" + userId);
                const userData = await response.json();
                setUsername(userData['username']);
            }
        }
        getUser();
    }, []);
    
    return(
        <main>
            <h1>Welcome to your personal account, {username}!</h1>
            <p>More to come...</p>
        </main>
    )
}