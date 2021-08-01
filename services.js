import React from 'react';
import HeroSection from '../..HeroSection'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from  './Data';
import Pricing from '../../../components/Pricing';

function Home() {
    return (
        <>
            
            <Pricing />
            <HeroSection{...homeObjOne}/>
        </>
    );
}

export default Home
