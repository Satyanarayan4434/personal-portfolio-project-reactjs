function ContactPage() {
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
            <h1 className="lg:font-bold  lg:text-[2rem] font-bold text-3xl text-white lg:text-black">
              Have any Project for me?
            </h1>
            <p className="lg:font-light lg:text-xl lg:text-center font-semibold text-sm text-center text-gray-400 lg:text-black">
              Crafting seamless digital experiences with precision and passion.
            </p>
            <div className="w-[4rem] h-[1px]  bg-[#F6B17A] flex lg:hidden"></div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:flex lg:flex-col lg:gap-5">
          {/* secoend-div */}
          <div className="bg-white opacity-50 rounded-lg p-10">
            <form action="post" className="flex flex-col items-start justify-center gap-8">
              <div className="flex flex-col ">
                <label htmlFor="name" className="text-[1.1rem]">
                  Name:<span className="text-red-900">*</span>
                </label>
                <input type="text" id="name" className="outline-none p-3 border-none bg-slate-300 w-[29rem] h-10 rounded-xl"/>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="email" className="text-[1.1rem]">
                  email:<span className="text-red-900">*</span>
                </label>
                <input type="email" id="email" className="outline-none p-3 border-none bg-slate-300 w-[29rem] h-10 rounded-xl"/>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="message" className="text-[1.1rem]">
                  Message:<span className="text-red-900">*</span>
                </label>
                <textarea type="text" id="message" className="outline-none p-3 border-none bg-slate-300 w-[29rem] h-[10rem] rounded-xl"/>
              </div>
              <button type="submit" className="bg-black text-white px-5 py-2 rounded-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
