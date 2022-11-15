import React, { useEffect } from 'react';

function LogoutPage() {

    async function logout() {
        const res = await fetch("http://localhost:3000/users/logout", {credentials: 'include'});
        console.log(res.status)
        window.location.href = "/"
    }

    useEffect(() => {
        logout()
    }, [])

    

    return(
        <h1>You have been logged-out</h1>
    )
}

export default LogoutPage;