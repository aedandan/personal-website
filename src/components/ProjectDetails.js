import React from 'react';

function ProjectDetails(projectName, shortDesc, projectImage, projectAlt, repoLink) {
    return(
        <div>
            <div>
                <h3>{projectName}</h3>
            </div>
            <div>
                <img src={projectImage} alt={projectAlt} />
            </div>
            <div>
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