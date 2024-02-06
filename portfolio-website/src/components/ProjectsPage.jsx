import marketingVistaHub from "../assets/marketingVistaHub.png";
import realEstate from "../assets/realEstate.png";
import shoppingCart from "../assets/shopping cart.png";
import razor from "../assets/razor.png";
import discord from "../assets/discord.png";

function ProjectsPage() {
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
          <div className="lg:w-[80%] lg:flex lg:flex-col flex flex-col lg:gap-6 gap-4 lg:items-center items-center lg:justify-center justify-center">
            {/* inside-first-div-2  */}
            <h1 className="lg:font-bold  lg:text-[3rem] font-bold text-xl text-white lg:text-black">
              My Projects
            </h1>
            <p className="lg:font-light lg:text-xl lg:text-center font-semibold text-sm text-center text-gray-400 lg:text-black">
              Crafting seamless digital experiences with precision and passion.
            </p>
            <div className="w-[4rem] h-[1px] bg-[#F6B17A] flex lg:hidden"></div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:flex lg:flex-row flex lg:flex-wrap flex-wrap items-center justify-center lg:items-start lg:justify-start lg:gap-5 gap-5">
          {/* secoend-div */}
          <img src={marketingVistaHub} alt="" className="lg:w-[8rem] w-[8rem]" />
          <div className="flex flex-col lg:gap-6 gap-5">
            <img src={realEstate} alt="" className="lg:w-[13rem] w-[10rem]" />
            <button className="bg-white rounded-lg shadow-2xl hover:bg-slate-800 hover:text-white text-md delay-100 transition-all flex items-center justify-center lg:hidden">See More</button>
            <img src={razor} alt="" className="w-[10rem] lg:w-[13rem]" />
          </div>
          <div className="flex lg:flex-col flex-row lg:gap-6 gap-2">
            <img src={shoppingCart} alt="" className="w-[9.2rem] lg:w-[13rem]" />
            <img src={discord} alt="" className="w-[9.5rem] lg:w-[13rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
