import Navbar from './Components/Navbar'
import PreLoader from './Components/PreLoader'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Hero from './Pages/Hero'
import Projects from './Pages/Projects'
export default function Home() {
  return (
   <main className='w-screen min-h-screen relative top:0 left:0 overflow-x-hidden'>
    <PreLoader />
    <Navbar/>
    <Hero />
    <About />
    <Projects />
    <Contact />
   </main>
  )
}
