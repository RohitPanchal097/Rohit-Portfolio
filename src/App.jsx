import { useEffect } from 'react'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Header from './components/Header'
import './App.css'
import HeroSection from './components/HeroSection'
import CustomCursor from './components/CustomCursor'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import './index.css'
function App() {
  useEffect(()=>{
    // register Scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    //refresh scrolltrigger when the page fully loaded
    ScrollTrigger.refresh()

    // clean up scrolltrigger on component unmount
    return () =>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }
  },[])

  return (
    <>
    <Header/>
    <HeroSection/>
    <CustomCursor/>
    <AboutSection/>
    <ProjectSection/>
    </>
  )
}

export default App
