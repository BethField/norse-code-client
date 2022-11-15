import React, { useState } from "react"
import { LandingMainBox, LandingCarouselBox } from "../../components"

export default function Home(){

    return(
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <LandingMainBox></LandingMainBox>
            <LandingCarouselBox></LandingCarouselBox>
        </main>
    )
}
