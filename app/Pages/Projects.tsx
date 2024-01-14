import { poppin, projects, rburned, roboto, rubik, skills, vinyl } from "../constants"
import { projectCardType, skillsType } from "../constants/Types/types"
import Image from 'next/image'
const Tech = () => {
  const skillsList: JSX.Element[] = skills.map((item: skillsType) => (
    <div key={item.id}>
      <div className="w-[65%] p-1 flex justify-evenly items-center h-[5em] -ml-7">
        {
          item.skills.map((skills: string) => (
            <div key={skills} className="w-full h-full flex items-center justify-start  p-3 relative hover:shadow">
              <div className="w-full bg-[#0000004b]  flex-center p-2 rounded-full h-full relative overflow-hidden size z-3 hover:text-[#000]">
                <p className=" z-[999]">{skills}</p>
                <div className="absolute rounded-full btnEff">
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  ))
  const projectList: JSX.Element[] = projects.map((item: projectCardType) => (
    <>
      <div className="w-full h-[32em]  bg-[#161616] p-6 rounded-xl hover:scale-[1.03] transition-all duration-500 ease-in-out card" key={item.id} >
        <div className="relative top-0 left-0 w-full h-full flex-all ">
          <div className="w-[40%] h-full relative flex-bet flex-col order-2 ">
            <div className="relative w-full h-[60%] flex justify-end">
              <div className="w-[70%] h-full relative mt-2 mr-2">
                <Image src={item.image.default} alt={item.title} className=" rounded-lg" />
              </div>
            </div>
            <div className="w-full min-h-4 pt-2 pr-3 pb-4 mb-2 flex justify-end">
              <i className="bi bi-github"></i>
            </div>
          </div>
          <div className="relative w-[60%] h-full flex-center order-1">
            <div className="relative w-[90%] h-full flex-bet flex-col mt-1">
              <div>
                <div className="w-full h-[4em] relative  flex items-end mb-5">
                  <h6 className={`text-4xl  relative ${roboto.className} uppercase font-bold space`}>{item.title}</h6>
                </div>
                <div className="w-full min-h-[5em] ">
                  <p className={`${poppin.className} text-lg leading-8`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="w-full min-h-[7em] ">
                <h6 className={`text-xl font-normal ${poppin.className} mb-1 mr-5 text-[gray] uppercase letter animate-pulse`}>Skills</h6>
                <div className="relative w-full h-[50%]">
                  {skillsList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[60px] w-full hover:transform-none"></div>
    </>

  ))
  return (
    <>
      {/* <div className='w-full h-[10vh] relative'></div> */}
      <section className="min-h-screen w-screen relative flex-center">
        <div className="relative w-[82%] min-h-screen">
          <div className="w-full h-[13rem] flex-center">
            <marquee
              className={`relative text-[9rem] font-bold uppercase ${poppin.className} `}
              scrollamount="17"
            >
              My Projects
            </marquee>
          </div>
          <div className="w-full min-h-[70vh] relative mt-10 cards">
            {projectList}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tech

