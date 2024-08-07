import React from 'react'
import { DefaultAnimatedPage } from '../components/DefaultAnimatedPage';
import { IoBriefcase } from 'react-icons/io5';
import { FaGithub } from "react-icons/fa6";

import { ReactComponent as RobloxIcon } from '../assets/RobloxIcon.svg';
import { ReactComponent as LuaIcon } from '../assets/LuaIcon.svg';
import { ReactComponent as TSIcon } from '../assets/TSIcon.svg';
import { ReactComponent as TailwindIcon } from '../assets/TailwindIcon.svg';
import { ReactComponent as FlutterIcon } from '../assets/FlutterIcon.svg';
import { ReactComponent as DartIcon } from '../assets/DartIcon.svg';
import { ReactComponent as FirebaseIcon } from '../assets/FirebaseIcon.svg';

import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from 'react-icons/fa6';

import balloonThumbnail from '../assets/balloon_sim.jpg';
import miningThumbnail from '../assets/mining_sim.jpg';
import powerThumbnail from '../assets/power_battlegrounds.png';
import workoutThumbnail from '../assets/workout.jpg';
import queueThumbnail from '../assets/queue_app.png';

import Button from '../components/Button';

type ProjectCardProps = {
    title: string
    description: string,
    image: string,
    children?: React.ReactNode
}

const ProjectCard = ({ title, description, image, children }: ProjectCardProps) => {
    return (
        <div className='w-[356px] aspect-video flex flex-col items-center justify-center bg-primary-neutral m-4 shadow-md font-primary'>
            <img src={image} alt='balloon simulator' className='w-full rounded-t-lg h-48 object-cover shadow-lg' />
            <div className='p-4'>
                <h3 className='text-primary-dark font-semibold text-3xl text-left mb-2'>{title}</h3>
                <p className='text-primary-dark text-lg line-clamp-3 text-left'>{description}</p>
                <h3 className='font-bold text-left mt-6 mb-2'>TECHNOLOGIES USED</h3>
                <div className='flex flex-wrap items-center justify-left gap-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}

const myProjects = [
    {
        title: "Balloon Simulator",
        description: "A Roblox game where you gain money by lifting objects with balloons. Has accumulated over 50M plays.",
        image: balloonThumbnail,
        link: "https://www.roblox.com/games/13814171092/Balloon-Simulator",
        tech: [
            <LuaIcon width={32} height={32} />,
            <RobloxIcon width={28} height={28} fill='blue' />,
            <FaGithub className='text-black text-2xl' />
        ]
    },
    {
        title: "Mining Simulator",
        description: "A Roblox game where you mine ores to gain money, unlock new pickaxes and worlds. Has accumulated over 10M plays.",
        image: miningThumbnail,
        link: "https://www.roblox.com/games/15181715981/Mining-Simulator",
        tech: [
            <LuaIcon width={32} height={32} />,
            <RobloxIcon width={28} height={28} fill='blue' />,
            <FaGithub className='text-black text-2xl' />,
        ]
    },
    {
        title: "Power Battlegrounds",
        description: "A Roblox game where unbox random super powers from lucky blocks to fight others. Developed using TypeScript.",
        image: powerThumbnail,
        link: "https://www.roblox.com/games/17067007720/Power-Battlegrounds",
        tech: [
            <TSIcon width={30} height={30} className='rounded-sm' />,
            <RobloxIcon width={28} height={28} fill='blue' />,
            <FaGithub className='text-black text-2xl' />,
        ]
    },
    {
        title: "HIIT Training App",
        description: "A web app to manage HIIT workouts. Developed as part of a university coursework with plain JS, HTML and CSS.",
        image: workoutThumbnail,
        link: "https://github.com/andero2003/hiit_coursework",
        tech: [
            <IoLogoJavascript className='text-yellow-400 text-2xl' />,
            <FaHtml5 className='text-red-500 text-2xl' />,
            <FaCss3Alt className='text-blue-500 text-2xl' />,
            <FaGithub className='text-black text-2xl' />,
        ]
    },
    {
        title: "This Portfolio",
        description: "This portfolio website was developed using React, TypeScript and TailwindCSS and hosted on GitHub.",
        image: 'https://via.placeholder.com/356x200',
        link: "",
        tech: [
            <TSIcon width={30} height={30} className='rounded-sm' />,
            <FaReact className='text-blue-400 text-2xl' />,
            <TailwindIcon width={30} height={30} />,
            <FaGithub className='text-black text-2xl' />,
        ]
    },
    {
        title: "Queue Management App",
        description: "A team university coursework, for which I was the group leader. A mobile app to manage virtual queues, developed with Dart, Flutter and Firebase.",
        image: queueThumbnail,
        link: "https://github.com/SofEng-Coursework/client",
        tech: [
            <DartIcon width={30} height={30} />,
            <FlutterIcon width={30} height={30} />,
            <FirebaseIcon width={30} height={30} />,
            <FaGithub className='text-black text-2xl' />,
        ]
    },
]

const Projects = () => {
    return (
        <DefaultAnimatedPage key='projects'>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <h2 className='text-white font-primary text-4xl mt-6 p-2 pl-6 pr-6 text-center'>Some of the projects I have worked on.</h2>
                <IoBriefcase className='text-white text-5xl mt-4 shadow-md' />

                <div className='flex flex-wrap items-center justify-center p-4'>
                    {
                        myProjects.map((project, index) => {
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