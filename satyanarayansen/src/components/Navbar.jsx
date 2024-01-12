import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
    const [btnState, setBtnStae] = useState(false)
    return (
        <div className="bg-gray-800 lg:px-10 py-4  flex flex-col md:flex-row lg:flex-row text-white justify-between text-sm items-center fixed top-[5rem] md:top-[3.5rem] lg:top-[3.5rem] z-40 w-full transition-all delay-150">
            <div className="flex justify-between w-[23rem]">
                <div>
                    <NavLink to='/'><img src={logo} alt="" className="w-[2rem]  border-yellow-700 border-[2px] h-[2rem] rounded-full"/></NavLink>
                </div>
                <button className="flex md:hidden lg:hidden " onClick={()=>{setBtnStae(!btnState)}}>
                    {
                        btnState === false? <RxHamburgerMenu size={"2em"}/> : <CiCircleRemove size={"2em"}/>
                    }
                </button>
            </div>
            <div className={btnState === false?"hidden md:flex lg:flex items-center gap-6":"flex flex-col md:flex md:flex-row lg:flex lg:flex-row  border-t-[1px] w-full mt-3 border-blue-50 items-center gap-6 pt-5 "}>
                <NavLink to='/'><p>HOME</p></NavLink>
                <NavLink to='/aboutUs'><p onClick={()=>{setBtnStae(false)}}>ABOUT US</p></NavLink>
                <NavLink to='/ourAgents'><p onClick={()=>{setBtnStae(false)}}>OUR AGENTS</p></NavLink>
                <NavLink to='/properties'><p onClick={()=>{setBtnStae(false)}}>PROPERTIES</p></NavLink>
                <NavLink to='/gallery'><p onClick={()=>{setBtnStae(false)}}>GALLERY</p></NavLink>
                <NavLink to='/blog'><p onClick={()=>{setBtnStae(false)}}>BLOG</p></NavLink>
                <NavLink to='/contactUs'><p onClick={()=>{setBtnStae(false)}}>CONTACT US</p></NavLink>
                <NavLink to='/search'><p onClick={()=>{setBtnStae(false)}}>SEARCH</p></NavLink>
                <NavLink to='/addListing'><button onClick={()=>{setBtnStae(false)}} className="border-[1px] border-gray-400 px-2 py-2 rounded-md">ADD Listing</button></NavLink>
            </div>
            
        </div>
    );
}

export default Navbar;