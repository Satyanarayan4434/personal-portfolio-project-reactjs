import heroImg from "../assets/heroIMG-1.png"
const HeroPage = () => {
    return (
        <div className="w-full flex justify-between items-center bg-[#424769] overflow-hidden relative">
            <div className="w-[50%] flex flex-col gap-5 items-start lg:ml-24 ">
                <h1 className="text-4xl font-bold">Hi, I am Satyanarayan sen</h1>
                <p className="text-2xl font-semibold ">I am a MERN stack Developer</p>
                <p className="">Building Websites to solve real life problems</p>
                <button>
                    <p>Contact Me</p>
                </button>
                <div>
                    <p>Scroll Down</p>
                </div>
            </div>
            <div className="z-10">
                <img src={heroImg} alt="" className="w-[37rem] brightness-90"/>
                
            </div>
            <div className="w-[70rem] -z-0 h-[38.7rem] bg-[#E5E1DA]  rounded-t-full absolute -top-10 -right-[22rem]"></div>
        </div>
    );
}

export default HeroPage;
