import React from 'react';
import getStaticProjects from '../static/ProjectData';
import ProjectStack from '../components/ProjectStack';
import ProjectDetails from '../components/ProjectDetails';

function ProjectPage(staticMode) {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        if (staticMode) {
            setProjects(getStaticProjects);

        } else {
            // TODO: Dynamic project rendering on page load

        }
    }, [staticMode]);


    return (
        <>
            {projects.map((project) => (
                <React.Fragment key={project.id}>
                    <ProjectStack projectLangList={project.stack} />
                    <ProjectDetails projectName={project.name} 
                    shortDesc={project.desc} /*projectImage={}*/ 
                    projectAlt={project.alt} 
                    repoLink={project.link} />
                </React.Fragment>
            ))}
        </>
        
    );
}

export default ProjectPage;