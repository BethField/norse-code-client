import React, { useState } from "react"
import { LandingMainBox, LandingCarouselBox } from "../../components"

export default function Home({themeMode}){

    return(
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <LandingMainBox themeMode={themeMode}></LandingMainBox>
            <LandingCarouselBox themeMode={themeMode}></LandingCarouselBox>
        </main>
    )
}
