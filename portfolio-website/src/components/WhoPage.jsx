function WhoPage() {
  return (
    <div className="lg:bg-[#B2C8BA] bg-[#164863] lg:pt-[5rem] pt-[2rem]">
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
            <h1 className="lg:font-bold  lg:text-[4rem] font-bold text-3xl text-white lg:text-black">Who I am?</h1>
            <p className="lg:font-light lg:text-xl lg:text-center font-semibold text-sm text-center text-gray-400 lg:text-black">
              Crafting seamless digital experiences with precision and passion.
            </p>
            <div className="w-[4rem] h-[1px]  bg-[#F6B17A] flex lg:hidden"></div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:flex lg:flex-col lg:gap-5">
          {/* secoend-div */}
          <p className="lg:text-xl text-sm lg:text-start text-center text-gray-200 lg:text-black">
            I'm Satyanarayan sen, a seasoned web developer proficient in HTML,
            CSS, Tailwind CSS, JavaScript, React.js, Redux Toolkit, and API
            integration. With a focus on responsive design, I ensure seamless
            user experiences across various devices. My expertise extends to Git
            and GitHub for efficient version control and collaborative
            development. Driven by a passion for innovation, I stay updated with
            the latest industry trends and technologies, constantly striving to
            enhance my skills.
          </p>
          <p className="text-xl hidden lg:flex">
            I take pride in transforming ideas into polished, high-quality web
            solutions, whether it's crafting engaging UI/UX designs or
            implementing complex backend functionalities. Client satisfaction is
            my top priority, and I prioritize clear communication and
            understanding of project objectives to deliver customized solutions
            that surpass expectations. Let's collaborate to bring your digital
            vision to life with creativity, precision, and expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoPage;
