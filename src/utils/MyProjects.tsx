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

type Project = {
    title: string
    description: string
    image: string
    link: string
    tech: React.ReactNode[]
}

const MY_PROJECTS: Project[] = [
    {
        title: "Balloon Simulator",
        description: "A Roblox game where you gain money by lifting objects with balloons. Has accumulated over 50M plays.",
        image: balloonThumbnail,
        link: "https://www.roblox.com/games/13814171092/Balloon-Simulator",
        tech: [
            <LuaIcon width={32} height={32} />,
            <RobloxIcon width={28} height={28} fill='blue' />,
            <FaGithub className='text-primary-neutral text-2xl' />
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
            <FaGithub className='text-primary-neutral text-2xl' />
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
            <FaGithub className='text-primary-neutral text-2xl' />
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
            <FaGithub className='text-primary-neutral text-2xl' />
        ]
    },
    {
        title: "This Portfolio",
        description: "This portfolio website was developed using React, TypeScript and TailwindCSS and hosted on GitHub.",
        image: 'https://dummyimage.com/600x400/000/fff&text=+',
        link: "",
        tech: [
            <TSIcon width={30} height={30} className='rounded-sm' />,
            <FaReact className='text-blue-400 text-2xl' />,
            <TailwindIcon width={30} height={30} />,
            <FaGithub className='text-primary-neutral text-2xl' />
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
            <FaGithub className='text-primary-neutral text-2xl' />
        ]
    },
]

export default MY_PROJECTS;