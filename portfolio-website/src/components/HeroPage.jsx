import heroImg from "../assets/heroIMG-1.png"
import { BsSendArrowDown } from "react-icons/bs";
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";
const HeroPage = () => {
    return (
        <div className="w-full flex justify-between items-center bg-[#B2C8BA] overflow-hidden relative">
            <div className="w-[50%] flex flex-col gap-5 items-start lg:ml-24 ">
                <h1 className="text-4xl font-bold">Hi, I am Satyanarayan sen</h1>
                <p className="text-xl font-semibold opacity-85">I am a MERN stack Developer</p>
                <p className="text-xl">Building Websites to solve real life problems</p>
                <button className="bg-[#1640D6] text-white px-4 py-3 rounded-md flex gap-3">
                    <p>Contact Me</p>
                    <BsSendArrowDown  size={"1.5em"} className="rotate-45"/>
                </button>
                <div className="flex items-center gap-3 text-xl text-[#1640D6] font-semibold">
                    <CiDesktopMouse2 />
                    <p>Scroll Down</p>
                    <IoIosArrowRoundDown className="animate-bounce"/>
                </div>
            </div>
            <div className="z-10">
                <img src={heroImg} alt="" className="w-[44rem] brightness-90"/>
                
            </div>
            <div className="w-[70rem] -z-0 h-[44rem] bg-slate-700 shadow-2xl shadow-black rounded-t-[50rem] absolute -top-10 -right-[22rem]"></div>
        </div>
    );
}

export default HeroPage;
