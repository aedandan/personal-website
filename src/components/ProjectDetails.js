import React from 'react';

function ProjectDetails(projectName, shortDesc, projectImage, projectAlt, repoLink) {
    return(
        <div className='project-tile-wrapper'>
            <div className='project-name-wrapper'>
                <h3 className='project-name'>{projectName}</h3>
            </div>
            <img className='project-image' src={projectImage} alt={projectAlt} />
            <div className='short-description'>
                <p>{shortDesc}</p>
            </div>
            <div>
                <a href={repoLink}>
                    Link to repository
                </a>
            </div>
        </div>
    );
}

export default ProjectDetails;