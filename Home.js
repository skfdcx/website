import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from  './Data'

function Home() {
    return (
        <>
            <HeroSection{...homeObjOne}/>
            <Pricing />
            <HeroSection{...homeObjThree}/>
            <HeroSection{...homeObjTwo}/>
            <Pricing />
            <HeroSection{...homeObjFour}/>
        </>
    );
}

export default Home
