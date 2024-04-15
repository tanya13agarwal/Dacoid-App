import React from 'react'

import EntryPage from '../components/EntryPage';

import image2 from "../data/image2.jpeg";
import button2 from "../data/button2.png";

const Android2 = () => {
    return ( 
        <EntryPage
            image={image2}
            text1="Get Burn"
            text2="Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever"
            Ellipse={button2}
            classname="mt-10"
            value="Android2"
        />
    )
  }
  
  export default Android2