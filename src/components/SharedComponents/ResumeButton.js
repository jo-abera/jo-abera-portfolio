import { FiFileText } from "react-icons/fi";

function ResumeButton() {
    return <div className="hidden group md:flex fixed z-10 bottom-6 right-2 gap-4 items-center">
        <div className="text-md text-darker-2  font-medium hidden group-hover:flex px-4 py-2 rounded-xl bg-white">
            RESUME
        </div>
        <a href='https://drive.google.com/file/d/1YdgtBKL8E4Z2CPAqwrG8wVhfFskMiMs_/view?usp=sharing' 
        className="bg-orange-dark rounded-full justify-center items-center px-4 py-4 hover:scale-110 duration-200">
            <FiFileText className="text-white text-xl"/>
        </a>
    </div>
}

export default ResumeButton;