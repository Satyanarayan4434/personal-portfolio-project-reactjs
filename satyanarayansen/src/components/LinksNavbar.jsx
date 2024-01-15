import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineBehance } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
const LinksNavbar = () => {
    return (
        <div className="sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center justify-between    px-10 py-3 bg-[#2D3250] text-[#F6B17A] border-b-[0.5px] border-gray-300 fixed top-0 z-50 w-full">
            <div className="flex items-center justify-center gap-3">
                <div><MdOutlineMail /></div>
                <h1 className="">satyanarayan74sen@gmail.com</h1>
            </div>
            <div className="flex items-center justify-center gap-6">
                <div><FaFacebookF /></div>
                <div><TiSocialDribbble /></div>
                <div><TiSocialLinkedin /></div>
                <div><AiOutlineBehance /></div>
                <div className="h-[2rem]  w-[1px] bg-white"></div>
                <div className="flex items-center gap-3">
                    <div><MdOutlineCall /></div>
                    <a href="" className="">7908226306</a>
                </div>
            </div>
        </div>
    );
}

export default LinksNavbar;
