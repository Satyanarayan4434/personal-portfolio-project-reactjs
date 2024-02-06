import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import reactLogo from "../assets/reactLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import mongodbLogo from "../assets/mongodbLogo.png";
import nodejsLogo from "../assets/nodejsLogo.png";
function Skills() {
    return (
      <div className="lg:bg-[#B2C8BA] bg-[#164863] lg:pt-[8rem] pt-[2rem]">
        {/* wrapper */}
        <div className="lg:w-[1180px] w-full lg:px-0 px-7  lg:mx-auto  lg:flex lg:flex-row flex flex-col gap-7 lg:gap-0 lg:items-center items-center lg:justify-center justify-center">
          {/* top-div  */}
          <div className="lg:flex lg:flex-row flex flex-col  lg:w-[40%]">
            {/* first-div  */}
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 lg:w-[10%]">
              {/* inside-first-div-1  */}
              <h1 className="rotate-90 hidden lg:flex">SCROLL</h1>
              <div className="lg:w-[1px] lg:h-[4rem] bg-white"></div>
            </div>
            <div className="lg:w-[80%] lg:flex lg:flex-col flex flex-col lg:gap-4 gap-4 lg:items-center items-center lg:justify-center justify-center">
              {/* inside-first-div-2  */}
              <h1 className="lg:font-bold  lg:text-[2rem] font-bold text-xl text-white lg:text-black">My Programming Skills</h1>
              <p className="lg:font-light lg:text-xl lg:text-center font-semibold text-sm text-center text-gray-400 lg:text-black">
                Crafting seamless digital experiences with precision and passion.
              </p>
              <div className="w-[4rem] h-[1px] bg-[#F6B17A] flex lg:hidden"></div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:flex lg:flex-row flex flex-row lg:flex-wrap flex-wrap items-center justify-center lg:items-start lg:justify-start lg:gap-5">
            {/* secoend-div */}
            <img src={htmlLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={cssLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={tailwindLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={jsLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={reactLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={reduxLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={mongodbLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
            <img src={nodejsLogo} alt="" className="lg:w-[5rem] w-[3rem]"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
  