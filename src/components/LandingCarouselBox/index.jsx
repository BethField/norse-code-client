import React from "react"
import { Box, Card, ThemeProvider, Typography, Container, Button } from "@mui/material"
import Item from '../Item'
import './index.css'

export default function LandingCarouselBox(){
    return(
        <>
            <Card sx={{
                width: 3/5,
                minHeight: 3/5,
                background: 'linear-gradient(0deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 5,
                padding: 10,
                margin: 10,
            }}>
                <div className="carouselContainer">
                    <div className='wrapper1'>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </div>
                    <div className='wrapper2'>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </div>
                    </div>
            </Card>
        </>
    )
}
