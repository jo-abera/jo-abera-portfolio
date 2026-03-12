import React, {useState, useEffect} from 'react';

import {FiGithub, FiArrowRightCircle} from "react-icons/fi";
import DetailsPage from '../DetailsPage/DetailsPage';

import { db } from '../../firebase/firebaseConfig';
import { onSnapshot, collection, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Work(){

    const [works, setWorks] = useState([]);

    const [showWork, setShowWork] = useState();

    useEffect(() => {
        const q = query(collection(db, "projects"));
        onSnapshot(q, 
        (snapshot) => {
            const wrks = snapshot.docs.map((doc)=>({...doc.data(), id: doc.id}));
            setWorks(wrks);
        })
    }, []);

    return (
        <div id="work" className="text-stone-300 w-full h-auto md:min-h-screen grow grid grid-cols-12 gap-4 justify-start md:py-8 md:mb-8 md:pt-24 md:px-14">

            <div className="w-full col-span-12 flex flex-col items-center md:px-6 text-darker-2 rounded-xl">
                <div className="flex flex-row justify-between md:justify-between w-full items-center mb-8 md:mb-16">
                    <div className='h-0.5 flex-grow bg-gradient-to-l from-darker-2 to-light-1'></div>
                    <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                    <div className="font-bold text-3xl md:text-5xl text-darker-2 mx-3 md:mx-6">
                        Work Experiences
                    </div>
                    <div className='h-2 w-2 md:h-3 md:w-3 bg-darker-2 rotate-45'></div>
                    <div className='h-0.5 flex-grow bg-gradient-to-r from-darker-2 to-light-1'></div>
                </div>
                <div className="grow w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 pr-0  justify-center items-center">
                    {works.map((work) => {
                        return (
                            <div key={work.id} className="flex flex-col w-full" >
                                <div className="w-full relative rounded-xl overflow-hidden" style={{height:600}} key={work.name}>
                                    {/* Background Image */}
                                    <img src={work.images[0]} alt="project" 
                                    className="absolute top-0 left-0 z-20 w-full h-96 object-cover" />

                                    {/* Background Overlay */}
                                    <div className="h-full w-full justify-end bg-gradient-to-t from-black-50 to-black-0 flex flex-col absolute top-0 left-0 z-30">
                                    </div>

                                    {/* Top Right Button */}
                                    <div className="flex items-center absolute top-0 right-0 z-40 p-4 md:p-6 gap-2 group">
                                        <Link to={`/work/${work.id}`} className="flex group items-center gap-4 px-4 py-2 bg-white text-sm md:text-md text-custom-dark font-space-grotesk font-bold rounded-lg">
                                            Read More
                                            <svg viewBox="0 0 53 16" fill="none" className="w-10 group-hover:ml-6 duration-200">
                                                <path d="M52.2071 8.70711C52.5976 8.31658 52.5976 7.68342 52.2071 7.29289L45.8431 0.928932C45.4526 0.538408 44.8195 0.538408 44.4289 0.928932C44.0384 1.31946 44.0384 1.95262 44.4289 2.34315L50.0858 8L44.4289 13.6569C44.0384 14.0474 44.0384 14.6805 44.4289 15.0711C44.8195 15.4616 45.4526 15.4616 45.8431 15.0711L52.2071 8.70711ZM0 9H51.5V7H0V9Z" fill="#19191E"/>
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col justify-end w-full h-full absolute top-0 right-0 z-30 gap-2 group">
                                        <div className="flex flex-col gap-1 bg-white p-4 md:p-6 group-hover:translate-y-4 duration-200">
                                            <div className="flex flex-col">
                                                <div className="text-black text-xl md:text-2xl font-bold font-space-grotesk">
                                                    {work.name}
                                                </div>
                                                <div className="text-black text-md md:text-lg font-space-grotesk mb-2">
                                                    {work.title}
                                                </div>
                                                <div className="w-0 group-hover:w-full duration-500 h-0.5 bg-red-400 hidden md:flex"></div>
                                            </div>
                                            <div className="text-sm font-normal text-gray-400">
                                                {work.from} - {work.to}
                                            </div>
                                            <div className="flex flex-row items-start gap-4">
                                                {work.desc}  
                                            </div>

                                             <div className="text-md font-bold text-darker-2 font-roboto mt-2">
                                                Techs Used:
                                            </div>

                                            {/* <div className="flex flex-row">
                                                {work.techs.map((tech) => {
                                                    return (
                                                        <div className="text-sm font-mono mr-4"> {tech} </div>
                                                    );
                                                })}

                                            </div> */}

                                            <div className="flex flex-row gap-5 my-2">
                                                {work.techIcons.map((tech) => {
                                                    return (
                                                        <img src={tech} title="React" alt="React" width="30" height="30"/>
                                                    );
                                                })}

                                            </div>

                                            <div className="flex gap-4 duration-200 mt-6 justify-end">
                                                <a href={work.source} className="group hover:scale-110 flex justify-end items-center gap-2 duration-200">
                                                    <FiGithub className='text-2xl text-red-400'/>
                                                </a>

                                                <a href={work.link} className="flex hover:scale-125 justify-end items-center gap-2 duration-200">
                                                    <FiArrowRightCircle className='text-2xl text-red-400'/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>
            {showWork && <DetailsPage onClose={() => setShowWork()} workData={showWork}/>}

        </div>
    );
}

export default Work;