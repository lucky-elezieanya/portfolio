import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage(){
  return (
    <div className="mx-auto w-full flex-col gap-10 justify-center min-h-screen items-center">
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
    <Testimonials/>
    <Contacts/>
      </div> 
  )
}
