import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function HomePage(){
  return (
    <div className="mx-auto w-full flex-col gap-10 justify-center min-h-screen items-center">
      <Hero/>
      <About/>
      <Projects/>
      </div> 
  )
}
