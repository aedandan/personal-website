import React from 'react';
import { motion } from 'framer-motion';

function HomePage() {
    return(
        <motion.div>
            <h1>Welcome to my portfolio site!</h1>
            <div id="central-section">
                <img 
                src='/img/aedan_turn.JPG'
                alt='Aedan wearing'/>
                
                <p className='main-text'> My name is Aedan, 
                    and I use they/them pronouns. <br /> I am a software engineer. </p>
            </div>
        </motion.div>
        
    );
}

export default HomePage;