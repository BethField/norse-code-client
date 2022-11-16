import React from 'react';
import { Grid, Paper, Avatar, Stack, Typography, TextField, Button, ThemeProvider } from '@mui/material';
import "./index.css";   

const Register = ({ThemeProvider}) => {

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
            alert(`User ${newUser.username} has been created.`)
            window.location.assign('/login');
        } else {
            alert("Could not create user")
        }
    }

    

    const paperStyle={
        padding: '60px 20px',
        width: 350, 
        margin: '50px auto', 
        backgroundColor: '#F9C74F',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Stack>
                        <Avatar sx={{ width:50, height: 50, objectFit: 'contain'}} alt="key" src="../src/assets/iconsLogSign/key.png" />
                    </Stack>
                    <Typography sx={{ fontSize: 30, textAlign: 'center'}}>
                        SIGN UP
                    </Typography>
                </Grid>
                <form className='form' onSubmit={handleSubmit}>
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF"}}
                    fullWidth
                    margin='normal'
                    id='name'
                    label='Name'
                    placeholder='Type your name...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF"}}
                    fullWidth
                    margin='normal'
                    id='surname'
                    label='Surname'
                    placeholder='Type your surname...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#FFFFFF"}}
                    required
                    fullWidth
                    margin='normal'
                    name='username'
                    id='username'
                    label='Username'
                    placeholder='Type your username...'
                    />
                    <TextField 
                    sx={{backgroundColor: "#F8E3B2"}}
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
                    sx={{backgroundColor: "#FFFFFF"}}
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
                        position: 'relative', 
                        bottom: -80,
                        padding: 1.5,
                        color: '#1E1E1E', 
                        fontSize: 15}} 
                        type='submit' variant='contained'>SIGN UP</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;