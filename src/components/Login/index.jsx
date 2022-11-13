import React from 'react';
import { Box, Button, Card, CardContent, Typography, TextField, InputAdornment, Avatar } from '@mui/material';
import "../../theme";
import PersonIcon from '@mui/icons-material/Person';
import "./index.css";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        <>
            <div className='container'>
                <Box 
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={3}
                    margin="auto">
                <Card 
                    
                sx={{ 
                    margin: 15,
                    minWidth: 350,
                    height: 350,
                    backgroundColor: '#F9C74F',
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                    overflow: 'visible'
                }}
                >
                    <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                        <Avatar sx={{ width:50, height: 50, objectFit: 'contain', display: 'inline-block', verticalAlign: 'bottom', paddingRight: 5}} alt="key" src="../src/assets/iconsLogSign/key.png" />
                        <Typography sx={{ fontSize: 30, textAlign: 'center', display: 'inline-block'}}>
                            SIGN IN
                        </Typography>
                        <TextField 
                            sx={{backgroundColor: "#FFFFFF"}}
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
                                <PersonIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField 
                            sx={{backgroundColor: "#F8E3B2"}}
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
                                <LockIcon />
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
                            position: 'relative', 
                            bottom: -48, 
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