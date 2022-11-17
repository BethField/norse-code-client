import React from 'react';
import { Box, Button, Card, CardContent, Typography, TextField, InputAdornment, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import "./index.css";
import LockIcon from '@mui/icons-material/Lock';

const Login = ({themeMode}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const login = { username: data.get('username'), password: data.get('password') };

        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(login)
        }
        
        const res = await fetch("http://localhost:3000/users/login", options);

        if (res.status === 200) {
            alert(`Correct credentials, ${login.username}`);
            window.location.assign('/user')
        }
    }

    return (
        <>
            <div className='container'>
                <Box 
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={6}
                    margin="auto"
                    
                    >
                    
                <Card 
                    
                sx={{ 
                    margin: 15,
                    minWidth: 400,
                    height: 400,
                    backgroundColor: '#F9C74F',
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                    overflow: 'visible',
                    
                }}
                >
                    <CardContent component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', paddingLeft: 6, paddingRight: 6}}>
                        <div className='form-header'>
                            <Avatar sx={{ width:60, height: 60, objectFit: 'contain', display: 'inline-block', verticalAlign: 'bottom', paddingRight: 2}} alt="key" src="../src/assets/iconsLogSign/key.png" />
                            <Typography sx={{ fontSize: 30, textAlign: 'center', display: 'inline-block', justifySelf: 'center'}}>
                                SIGN IN
                            </Typography>
                        </div>
                        
                        
                        <TextField 
                            sx={{backgroundColor: "#FFFFFF", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                            paddingLeft='20'
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            label='Username'
                            name='username'
                            autoComplete='username'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment >
                                <PersonIcon sx={{marginRight: 2}}/>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField 
                            sx={{backgroundColor: "#F8E3B2", input: { color: themeMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.54)' }}}
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            id='password'
                            label='Password'
                            type='password'
                            autoComplete='password'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment >
                                <LockIcon sx={{marginRight: 2}}/>
                                </InputAdornment>
                            ),
                            }}
                        />
                        
                        <Button 
                            type="submit"
                            sx={{
                            width: 200, 
                            margin: "auto auto", 
                            borderRadius: 3, 
                            backgroundColor: "#F8E3B2",
                            ':hover': {
                            color: 'white'
                            }, 
                            position: 'relative', 
                            bottom: -97, 
                            padding: 1.5, 
                            color: '#1E1E1E', 
                            fontSize: 15
                            }}
                            variant="contained"
                        >
                            SIGN IN
                        </Button>
                    </CardContent>
                </Card>
            </Box>
                
            </div>
        </>
    )
}

export default Login;
