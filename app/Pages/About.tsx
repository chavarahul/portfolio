import { poppin, rburned, roboto, rubik, vinyl } from '../constants'
const About  = () => {
    return (
        <section className='w-screen min-h-screen relative' id="about">
            {/* <div className='w-full h-[10vh] relative' id="about"></div> */}
            <div className='relative w-full min-h-[70vh] flex-center'>
                <div className='w-[75%] min-h-[70vh] relative'>
                    <div className='w-full h-[16rem] relative '>
                        <div className='w-full relative h-[50%] '>
                            <div className="w-[40%] h-full relative flex items-end">
                                <h5 className={`text-7xl ${rubik.className} animate-colorfill letter font-semibold`}>About</h5>
                            </div>
                        </div>
                        <div className='w-full relative h-[50%] '>
                            <div className='w-[100%] h-[70%] flex-bet '>
                                <div className="w-[30%] relative h-full flex items-center justify-start">
                                    <h5 className={`text-7xl ${rubik.className} letter font-semibold`}>me</h5>
                                </div>
                                <div className=" h-full w-[10%] flex-center">
                                    <i className="bi bi-arrow-right textColor shadow"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full min-h-[20rem] flex-center">
                        <div className={`relative w-[86%] h-full leading-loose text-2xl ${poppin.className} scroll-fade`} >
                            <p className='aboutinfo'>
                                I am a senior frontend developer and full stack developer with extensive experience in building dynamic and visually appealing websites. Currently, I am part of the team at Noobs Learning, where I have been contributing for the past 5 months. This involves creating responsive and user-friendly interfaces that enhance the overall user experience.
                                Furthermore,It allowing me to contribute to various aspects of application development. Whether it {'\u0027'}s working on the frontend to ensure a seamless user interface or delving into the backend to implement robust functionality, I enjoy the challenges that full-stack development brings.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full h-[10vh] relative'></div> */}
        </section>
    )
}

export default About
