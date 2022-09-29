import React from 'react';

function ProjectDetails({ projectName, shortDesc, /*projectImage, projectAlt,*/ repoLink}) {
    return(
        <div className='project-tile-wrapper'>
            <div className='project-name-wrapper'>
                <h2 className='project-name'>{projectName}</h2>
                <a href={repoLink}>
                    Project Link
                </a>
            </div>
            
            {/* <img className='project-image' src={projectImage} alt={projectAlt} /> */}
                <p className='short-description'>{shortDesc}</p>
                
        </div>
    );
}

export default ProjectDetails;