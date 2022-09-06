import React from 'react';

function ProjectStack(projectLangList) {
    // TODO: Process project data served from somewhere



    // TODO: Convert the array into an unordered list

    return(
        // Convert the array of languages passed down from main projects page
        // to an HTML list
        <div>
            <ul>
                {projectLangList.map((language) => 
                <li id={language} key={language}>{language}</li>)}
            </ul>
        </div>
        
    );

}

export default ProjectStack;