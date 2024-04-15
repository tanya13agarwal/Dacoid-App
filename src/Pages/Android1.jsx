import React from 'react'

import EntryPage from '../components/EntryPage';

import image1 from "../data/image1.jpeg";
import Ellipse1 from "../data/button1.png";

const Android1 = () => {
    return (
        <EntryPage
            image={image1}
            text1="Track Your Goal"
            text2="Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
            Ellipse = {Ellipse1}
            linkto = "/next"
        />
    )
  }
  
  export default Android1