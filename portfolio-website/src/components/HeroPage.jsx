import heroImg from "../assets/heroIMG-1.png";
import heroImg2 from "../assets/heroIMG.png";
import qutosImg from "../assets/qutos.png"
import { BsSendArrowDown } from "react-icons/bs";
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const HeroPage = () => {
    return (
        <div className="w-full sm:flex sm:flex-col  md:flex md:flex-row lg:flex lg:flex-row lg:justify-between gap-28  lg:items-center lg:bg-[#B2C8BA] bg-[#164863] overflow-hidden relative pt-12 lg:pt-0">
            <div className="w-[20rem] mx-auto lg:w-[50%] flex flex-col gap-3 lg:gap-5  lg:items-start justify-start items-start  lg:ml-24 ">
                <h1 className="text-[1.5rem] md:text-[3rem] lg:text-[4rem]  z-10 font-bold text-white lg:text-black"><span className="font-extrabold lg:text-blue-800 text-white">Hi,</span> I am Satyanarayan sen</h1>
                <p className="text-[1rem] lg:text-[1.2rem] font-semibold opacity-85 lg:text-blue-800 text-gray-100">I am a MERN stack Developer</p>
                <p className="text-[1rem] lg:text-xl lg:text-blue-900 text-gray-400">Building Websites to solve real life problems</p>
                <button className="bg-[#1640D6] text-white px-4 py-3 rounded-md flex gap-3">
                    <p>Contact Me</p>
                    <BsSendArrowDown  size={"1.5em"} className="rotate-45"/>
                </button>
                <div className="flex items-center gap-3 text-xl lg:text-[#1640D6] text-white font-semibold pt-5 lg:pt-0">
                    <CiDesktopMouse2 />
                    <p className="font-extralight lg:font-normal text-sm">Scroll Down</p>
                    <IoIosArrowRoundDown className="animate-bounce"/>
                </div>
            </div>
            <div className="z-10 hidden lg:flex">
                <img src={heroImg} alt="" className="lg:w-[44rem] lg:brightness-90"/>                
            
            </div>
            <div className="z-10 lg:hidden sm:flex py-14">                      
                <img src={heroImg2} alt="" className="lg:w-[44rem] w-[20rem] mx-auto rounded-md shadow-xl shadow-black"/> 
            </div>
            <div className="lg:w-[70rem] -z-0 lg:h-[44rem] bg-slate-700 shadow-2xl shadow-black lg:rounded-t-[50rem] absolute lg:-top-10 lg:-right-[22rem]"></div>
            <img src={qutosImg} alt="" className="absolute lg:top-[14rem] lg:left-[39.3rem] opacity-35 -z-0 sm:hidden md:w-[3rem] lg:w-[3rem]"/>
            <img src={qutosImg} alt="" className="absolute lg:top-[7rem] lg:left-[2.5rem] opacity-35 -z-0 sm:hidden  md:w-[3rem] lg:w-[3rem]  rotate-180"/>
            <div className="absolute lg:right-11 right-10 top-48 lg:bottom-16 text-white lg:flex lg:flex-col flex flex-row lg:justify-center justify-center lg:items-center items-center lg:gap-6 gap-4">
                <div>
                    <a href=""><FaSquareFacebook /></a>
                </div>
                <div>
                    <a href=""><AiFillInstagram /></a>
                </div>
                <div>
                    <a href=""><FaLinkedin /></a>
                </div>
                <div>
                    <a href=""><FaXTwitter /></a>
                </div>
                <div className="lg:w-[1px] lg:h-[4rem]  bg-white"></div>
            </div>
        </div>
    );
}

export default HeroPage;
