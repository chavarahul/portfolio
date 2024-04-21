import Navbar from './Components/Navbar'
import PreLoader from './Components/PreLoader'
import { About } from './Pages/About'
import Contact from './Pages/Contact'
import { Hero } from './Pages/Hero'
import { SparklesPreview } from './Pages/Ppp'
import Projects from './Pages/Projects'
import { TabsDemo } from './Pages/Tabs'
export default function Home() {
  return (
    <>
    <PreLoader />
    <Navbar/>
    <Hero />
    <About />
    <Projects />
    {/* <SparklesPreview /> */}
    {/* <TabsDemo/> */}
    <Contact />
    </>
  )
}
