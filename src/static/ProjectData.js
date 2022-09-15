const projectData = {
    project1:{
        id: 1,
        name: 'Travelo-Hey!',
        desc: 'An app to help LGBTQ+ travelers find safe places abroad.',
        alt: 'The Travelo-Hey! logo; the phrase Travelo-Hey! in stylish font',
        link: 'https://github.com/aedanmc/travelo-hey',
        stack: ['Node.JS', 'React', 'JavaScript', 'CSS', 'HTML'],
    },
    project2:{
        id: 2,
        name: 'Portfolio Site',
        desc: 'A lightweight website to showcase my work.',
        alt: 'The website that this information is hosted on',
        link: '',
        stack: ['React', 'JavaScript', 'SCSS'],
    },
    project3:{
        id: 3,
        name: 'Discord Event Scheduler',
        desc: 'A tool to help members of a Discord server schedule gaming events',
        alt: '',
        link: '',
        stack: ['Java'],
    },
    project4:{
        id: 4,
        name: 'Campus Path Finder',
        desc: '(UW Class Project) A full stack web app designed to help users navigate the UW campus',
        alt: 'Map of UW campus',
        link: '',
        stack: ['Java', 'TypeScript', 'React', 'CSS', 'HTML'],
    },
    project5:{
        id: 5,
        name: 'Secure Network Search Engine',
        desc: '(UW Class Project) A threaded application built to allow users to search a small directory of files remotely',
        alt: '',
        link: '',
        stack: ['C++', 'C', 'HTML'],
    },
    project6:{
        id: 6,
        name: 'Disability Language Project',
        desc: '(Non-technical role) A research project intended to help determine how best to refer to disabled people',
        alt: '',
        link: 'https://athersharif.me/documents/assets-2022-identity-first-vs-person-first.pdf',
        stack: ['JavaScript', 'React', 'EcmaScript'],
    }
}

export default function getStaticProjects() {
    return projectData;
}