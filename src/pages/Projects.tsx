import React from 'react'
import { DefaultAnimatedPage } from '../components/DefaultAnimatedPage';
import { IoBriefcase } from 'react-icons/io5';

import Button from '../components/Button';
import MY_PROJECTS from '../utils/MyProjects';

type ProjectCardProps = {
    title: string
    description: string,
    image: string,
    children?: React.ReactNode
}

const ProjectCard = ({ title, description, image, children }: ProjectCardProps) => {
    return (
        <div className='w-[356px] aspect-video flex flex-col items-center justify-center bg-primary-dark m-4 shadow-md font-primary'>
            <img src={image} alt='balloon simulator' className='w-full h-48 object-cover shadow-lg' />
            <div className='p-4'>
                <h3 className='text-primary-neutral font-semibold text-2xl text-left mb-2'>{title}</h3>
                <p className='text-primary-neutral text-lg line-clamp-3 text-left'>{description}</p>
                <h3 className='font-bold text-left text-primary-neutral mt-6 mb-2'>TECHNOLOGIES USED</h3>
                <div className='flex flex-wrap items-center justify-left gap-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <DefaultAnimatedPage key='projects'>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <h2 className='text-white font-primary text-4xl mt-6 p-2 pl-6 pr-6 text-center'>Some of the projects I have worked on.</h2>
                <IoBriefcase className='text-white text-5xl mt-4 shadow-md' />

                <div className='flex flex-wrap items-center justify-center p-4'>
                    {
                        MY_PROJECTS.map((project, index) => {
                            return (
                                <Button key={index}>
                                    <a href={project.link} target='_blank'>
                                        <ProjectCard title={project.title} description={project.description} image={project.image}>
                                            {project.tech}
                                        </ProjectCard>
                                    </a>
                                </Button>
                            );
                        })
                    }
                </div>
            </div>
        </DefaultAnimatedPage>
    );
}

export default Projects