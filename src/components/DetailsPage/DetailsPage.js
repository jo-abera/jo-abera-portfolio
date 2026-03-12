import React, {useState, useEffect} from 'react';
import  { useParams, Link } from "react-router-dom";
import {FiEye, FiGithub, FiArrowRightCircle, FiArrowLeft} from "react-icons/fi";

import { db } from '../../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function DetailsPage() {
    const params = useParams();
    const {id} = params;

    const [workData, setWorkData] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const getWorkData = async () => {
        const ref = doc(db, "projects", id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setWorkData(data);
        } else {
            console.log("No such document!");
        }
    }


    useEffect(() => {
        getWorkData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='bg-light-1 flex flex-col items-center w-full min-h-screen text-darker-2 font-space-grotesk '>
            <div className="flex flex-row w-full fixed bg-darker-2 text-white">
                <Link to={"/"} className='px-4 py-2 lg:py-3 flex flex-row gap-2 items-center'>
                    <FiArrowLeft className='text-xl md:text-xl'/>
                    <div className="text-lg">
                        Go Back
                    </div>
                </Link>
            </div>
            {workData ? (
                <div className="flex flex-col h-full rounded-xl items-center p-3 w-full md:w-1/2 xl:w-1/3 mt-10 lg:mt-14">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-col">
                                <div className="text-black text-xl md:text-2xl font-bold">
                                    {workData.name}
                                </div>
                                <div className="text-black text-lg md:text-xl">
                                    {workData.title}
                                </div>
                            </div>


                            <div className="flex gap-4 duration-200 justify-end">
                                <a href={workData.source} className="group text-black hover:text-red-400 hover:scale-110 flex justify-end items-center gap-2 duration-200">
                                    <FiGithub className='text-2xl '/>
                                </a>

                                <a href={workData.link} className="flex text-black hover:text-red-400 hover:scale-125 justify-end items-center gap-2 duration-200">
                                    <FiArrowRightCircle className='text-2xl'/>
                                </a>
                            </div>

                        </div>

                        <img src={workData.images[currentImage]} alt="project" className="w-full h-96 object-cover rounded-lg" />

                        <div className="flex flex-row gap-2 mb-2 justify-start w-full">
                            {workData.images.map((image, index) => {
                                return (
                                    <div 
                                    onClick={() => {
                                        setCurrentImage(index);
                                    }}
                                    key={index}
                                    className='w-1/5 md:w-32 h-16 md:h-24 rounded-lg overflow-hidden relative hover:cursor-pointer'>
                                        <img src={image} alt="project" className="w-full h-full object-cover z-10"/>
                                        {currentImage===index && (
                                            <div className='absolute top-0 left-0 bg-black h-full w-full z-20 bg-opacity-50 backdrop-blur-sm flex flex-row justify-center items-center gap-2'>
                                                <FiEye className='text-xl text-white'/>
                                                <div className='text-white hidden md:flex'>Seeing</div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 p-1 md:p-3 group-hover:translate-y-4 duration-200 items-center w-full">

                        <div className="text-base md:text-lg font-bold text-darker-2 font-roboto mt-2 underline underline-offset-2">
                            Techs Used
                        </div>

                        <div className="flex flex-row gap-5 mt-1 mb-3">
                            {workData.techIcons.map((tech) => {
                                return (
                                    <img src={tech} title="React" alt="React" width="30" height="30"/>
                                );
                            })}
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="text-black text-lg md:text-xl font-space-grotesk font-medium">
                                {workData.title}
                            </div>
                            <div className="w-0 group-hover:w-full duration-500 h-0.5 bg-red-400 hidden md:flex"></div>
                        </div>
                        <div className="flex flex-row mb-2">
                            <div className="px-4 py-1 rounded-full bg-white">
                                <div className="text-base text-darker-1 font-medium">
                                    {workData.from} - {workData.to}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-row items-start gap-4 mb-4">
                            {workData.details}  
                        </div>
                        <div className="flex md:hidden flex-row items-start gap-4 mb-4">
                            {workData.desc}  
                        </div>

                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full w-full bg-white rounded-xl p-6 justify-center items-center flex-grow gap-2">
                    <div className='w-1/4 h-6 object-contain rounded-lg bg-slate-100'>
                    </div>
                    <div className='w-1/3 h-4 object-contain rounded-lg bg-slate-100 mb-2'>
                    </div>
                    <div className='w-full md:w-1/2 xl:w-1/3 h-96 object-contain rounded-lg bg-slate-100'>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className='w-32 h-32 object-contain rounded-lg bg-slate-100'>
                        </div>
                        <div className='w-32 h-32 object-contain rounded-lg bg-slate-100'>
                        </div>
                        <div className='w-32 h-32 object-contain rounded-lg bg-slate-100'>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailsPage;