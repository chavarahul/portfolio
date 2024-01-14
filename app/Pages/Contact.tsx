import { pacifico, poppin } from "../constants"

const Contact = () => {
  return (
    <>
      <div className="h-[20vh] w-full relative"></div>
      <section className="min-h-[50vh] w-screen  flex-center bg-[#2a2f3f0d] p-10 pt-16">
        <div className="w-[80%] min-h-[50vh] relative ">
          <div className="w-full h-[25em] flex-bet flex-col">
            <div className="w-full h-[80%] flex">
              <div className="w-[40%] h-full relative">
                <div className="w-full min-h-[15%] relative flex">
                  <h1 className={`text-[26px] letter w-full flex items-start font-cursive  ${poppin.className} absolute left-0  h-full`}>
                    <span className={`${pacifico.className} flex-center bg-[#f5f5f5ed] text-[#050505] rounded-full h-[40px] w-[40px] mr-1`}>
                      R
                    </span>
                    <span className='pt-1 h-10 textColor'>
                      ahul
                    </span>
                  </h1>
                </div>
                <div className={`relative w-full h-[60%] leading-10 text-lg ${poppin.className}`} >
                  <p className="mt-5">
                    I am a senior frontend developer and full stack developer n development.
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full relative flex justify-end">
                <div className="w-[85%] h-full \" >
                  <div className="w-full h-[35%] leading-10">
                    <h5 className={`${poppin.className} text-4xl`}>Have a great idea in mind?</h5>
                    <div className=" w-[40%] flex relative">
                      <p className="text-3xl mt-5 text-[#6a6969] relative">Let{'\u0027'}s Connect</p>
                      <i className="bi bi-arrow-up-right absolute right-2 bottom-0 shadow"></i>
                    </div>
                  </div>
                  <div className="relative w-full h-[20%] mt-3">
                    <div className="w-[30%] h-full relative flex items-center justify-start  icons">
                      <i className="bi bi-instagram  animate-bounce pr-7"></i>
                      <i className="bi bi-linkedin animate-bounce pr-7"></i>
                      <i className="bi bi-envelope animate-bounce"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[20%] flex-center relative">
                   <div className="w-full h-full  border-t border-[#64dcdd]">
                    <div className="h-[50%] w-full flex-bet " >
                       <div className="">
                        <p className={`${poppin.className} mt-8`}>Website Designed By Rahul</p>
                       </div>
                    </div>
                   </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
