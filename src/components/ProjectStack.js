import React from 'react';

function ProjectStack({ projectLangList }) {
    return(
        // Convert the array of languages passed down from main projects page
        // to an HTML list
        <div className='project-tile-stack' >
            <ul>
                {projectLangList.map((language) => 
                <li id={language} key={language}>{language}</li>)}
            </ul>
        </div>
    );

}

export default ProjectStack;