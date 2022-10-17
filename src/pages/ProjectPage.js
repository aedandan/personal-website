import React from 'react';
import getStaticProjects from '../static/ProjectData';
import ProjectStack from '../components/ProjectStack';
import ProjectDetails from '../components/ProjectDetails';

function ProjectPage(staticMode) {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        if (staticMode) {
            setTimeout(function(){
                setProjects(getStaticProjects)
            }, 1000);
        } else {
            // TODO: Dynamic project rendering on page load

        }
    }, [staticMode]);

    return (
        <div 
        className='project-list'>
            {projects.map((project) => (
                <div 
                className='project-tile' 
                key={project.id}>
                    <ProjectDetails 
                    projectName={project.name} 
                    shortDesc={project.desc} /*projectImage={}*/ 
                    projectAlt={project.alt} 
                    repoLink={project.link} 
                    />
                    <ProjectStack 
                    projectLangList={project.stack} 
                    />
                </div>
            ))}
        </div>
        
    );
}

export default ProjectPage;