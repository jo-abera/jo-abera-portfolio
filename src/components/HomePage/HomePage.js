// import Spline from '@splinetool/react-spline';
import { useState, useEffect, useContext } from 'react';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { db } from '../../firebase/firebaseConfig';
import { onSnapshot, collection, query } from 'firebase/firestore';

import { UserContext } from '../../contexts/UserContext';

function HomePage(){
    const {myData} = useContext(UserContext);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "skills"));
        onSnapshot(q, 
        (snapshot) => {
            const sks = snapshot.docs.map((doc)=>({...doc.data(), id: doc.id}));
            setSkills(sks);
            console.log(sks)
        })
    }, [])

    return (
        <div id="about" className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2">

            <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
                
                <div className="grid grid-cols-12 grid-flow-row w-full items-center justify-center">
                    <div className="col-span-12 w-full flex flex-col items-center">

                        <img src={`${myData?.profile}`} alt="profile pic" 
                        className="w-40 md:w-64 h-40 md:h-64 bg-white rounded-full hover:cursor-pointer object-cover border-4 md:border-8 hover:border-4 duration-200 border-white" />
                        <p className="text-2xl md:text-3xl text-slate-500 font-roboto font-normal tracking-widest mx-0 pt-4 mb-2">👋 Hi, I'm </p>
                        <div className='group flex flex-col items-center'>
                            <a href="https://www.linkedin.com/in/surafelk/"  
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-roboto font-bold group-hover:text-orange-dark duration-300 text-center uppercase">
                                {`${myData?.fullname}`}
                            </a>
                            <div className='flex flex-col md:flex-row justify-center gap-0 md:gap-0 group-hover:gap-2 md:group-hover:gap-16 duration-300 w-full items-center'>
                                <div className='flex flex-row gap-4 items-center'>
                                    <p className="text-xl lg:text-3xl text-slate-500 font-roboto font-thin text-center"> {`${myData?.position1}`} </p>
                                    <div className='hidden md:flex h-0 w-0 bg-orange-dark rotate-45 group-hover:w-2 group-hover:h-2 duration-300'></div>
                                </div>

                                <p className="text-md md:text-xl text-slate-500 font-roboto font-thin text-center mx-2 group-hover:mx-0"> & </p>

                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='hidden md:flex h-0 w-0 bg-orange-dark rotate-45 group-hover:w-2 group-hover:h-2 duration-300'></div>
                                    <p className="text-xl lg:text-3xl text-slate-500 font-roboto font-thin text-center"> {`${myData?.position2}`}</p>
                                </div>
                                
                            </div>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <div className="font-roboto font-normal text-md md:text-lg text-slate-500 lg:w-2/3 text-justify md:text-center">
                                {`${myData?.statement}`}
                            </div>
                        </div>

                        <br />
                        <div className="flex gap-6">
                            <div className="flex group items-center">
                                <a href={`${myData?.resume}`} 
                                className="px-4 py-2 rounded-full font-roboto text-white text-md bg-darker-2 group-hover:bg-white mr-0 group-hover:mr-2 group-hover:text-orange-dark duration-200">
                                    My Resume
                                </a>
                                <FaChevronLeft className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -mr-2 group-hover:mr-0 group-hover:visible duration-200'/>
                            </div>

                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://linktr.ee/surafelkindu" 
                                className="px-4 py-2 rounded-full font-roboto text-white text-md bg-darker-2 group-hover:bg-white ml-0 group-hover:ml-2 group-hover:text-orange-dark duration-200">
                                    My Socials
                                </a>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 items-center mt-8'>
                            <p className="text-md lg:text-lg text-slate-500 font-roboto text-center"> SKILLS </p>
                            {skills.length>0 ? (
                                <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                                    {skills.map((skill) => {
                                        return (
                                            <div key={skill.id} className='px-5 py-3 rounded-full bg-white flex gap-3 items-center hover:scale-110 duration-200'>
                                                <img src={skill.icon} title={skill.title} alt={skill.title} width="20" height="20"/>
                                                <p className="text-sm text-slate-500 font-roboto text-center"> {skill.title} </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                                    {[1,2,3,4,5].map((skill) => {
                                        return (
                                            <div key={skill.id} className='w-32 h-10 rounded-full bg-black bg-opacity-5 flex gap-3 items-center hover:scale-110 duration-200'>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HomePage;