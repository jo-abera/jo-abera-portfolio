import React, {useContext} from 'react';
import  { Link } from "react-router-dom";
import {FiLinkedin, FiArrowLeft} from "react-icons/fi";

import { UserContext } from '../../contexts/UserContext';

function OwnedByPage() {

    const {myData} = useContext(UserContext);

    return (
        <div className='bg-light-1 flex flex-col items-center w-full min-h-screen text-darker-2 font-space-grotesk '>
            <div className="flex flex-row w-full fixed bg-darker-2 text-white">
                <Link to={"/"} className='group px-4 py-2 lg:py-3 flex flex-row gap-2 items-center'>
                    <FiArrowLeft className='text-xl md:text-xl'/>
                    <div className="text-lg">
                        <p className='group-hover:underline'>Go Back Home</p>
                    </div>
                </Link>
            </div>

            <div className='flex flex-col gap-2 mt-20 max-w-2xl mb-20'>
                <div className="flex flex-row w-full justify-between items-end">
                    <div className="flex flex-col">
                        <p>This site is owned and operated by</p>
                        <div className="text-black text-xl md:text-2xl font-bold">
                            {`${myData?.fullname}`}
                        </div>
                        <div className="text-blue-600 text-lg md:text-xl">
                            <a href="mailto:surafelkindu01@gmail.com" className='hover:underline'>surafelkindu01@gmail.com</a>
                        </div>
                    </div>


                    <div className="flex gap-4 duration-200 justify-end">
                        <a href={'https://www.linkedin.com/in/surafelk/'} className="group text-black hover:text-red-400 hover:scale-110 flex justify-end items-center gap-2 duration-200">
                            <p>Let's connect on LinkedIn:</p>
                            <FiLinkedin className='text-2xl '/>
                        </a>
                    </div>

                </div>

                <img src={`${myData?.profile}`} alt="project" 
                className="w-full h-[550px] object-cover rounded-xl border-2 mt-2 mb-2 border-black" />

                <div className="flex flex-row items-start gap-4 mb-4 text-lg">
                {`${myData?.statement}`}
                </div>

                <div className="flex flex-col">
                    <p>Address:</p>
                    <div className="text-md text-darker-2 font-medium underline text-lg">
                        {`Eritrea St. ${myData?.location}`}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default OwnedByPage;