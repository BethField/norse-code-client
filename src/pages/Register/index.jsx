import React from 'react';
import { Grid, Paper, Avatar, Stack, Typography, TextField, Button, ThemeProvider } from '@mui/material';
import "./index.css";   

export default function Register ({themeMode}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        sendData({username: data.get('username'), password: data.get('password')});
    }

    async function sendData(newUser) {
        const options = { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        const res = await fetch("http://localhost:3000/users/register", options);

        if (res.status === 201) {
            // alert(`User ${newUser.username} has been created.`)
            window.location.assign('/login');
        // } else {
        //     // alert("Could not create user")
        // }
    }
}

    const paperStyle={
        padding: '20px 20px 60px 20px',
        width: 350, 
        margin: '50px auto', 
        backgroundColor: '#F9C74F',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        color: 'black'
    }

    return ( 
        <>
        {/* {themeMode} */}
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <div className='form-header'>
                        <Stack>
                            <Avatar sx={{ width:60, height: 60, objectFit: 'contain', paddingRight: 2}} alt="key" src="../src/assets/iconsLogSign/key.png" />
                        </Stack>
                        <Typography sx={{ fontSize: 30, textAlign: 'center'}}>
                            SIGN UP
                        </Typography>
                    </div>
                    
                </Grid>
                <form className='form' onSubmit={handleSubmit}>
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                    fullWidth
                    margin='normal'
                    id='name'
                    label='Name'
                    placeholder='Type your name...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                    fullWidth
                    margin='normal'
                    id='surname'
                    label='Surname'
                    placeholder='Type your surname...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                    required
                    fullWidth
                    margin='normal'
                    name='username'
                    id='username'
                    label='Username'
                    placeholder='Type your username...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#F8E3B2", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                    required
                    fullWidth
                    margin='normal'
                    name='password'
                    type='password'
                    id='password'
                    label='Password'
                    placeholder='Type a password...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                    fullWidth
                    margin='normal'
                    id='year'
                    label='School Year'
                    placeholder='Type your school year...'
                    />
                    <Button sx={{
                        width: 200, 
                        margin: "auto auto", 
                        borderRadius: 3, 
                        backgroundColor: "#F8E3B2",
                        ':hover': {
                            color: 'white'
                        },
                        position: 'relative', 
                        bottom: -110,
                        padding: 1.5,
                        color: '#1E1E1E', 
                        fontSize: 15}} 
                        type='submit' variant='contained'>SIGN UP</Button>
                </form>
            </Paper>
        </Grid>
        </>
    )
}

