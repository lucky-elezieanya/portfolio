import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'lucide-react'
import DownloadButton from '../DownloadButton'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* bg */}
  
        <div className='absolute inset-0'>
          <img src="/hero.png" alt="Hero Image" className='h-full w-full object-cover opacity-40' />
        </div>
        <div className="absolute inset-0 bg-gradientto-b from-background via-background to-background/20"/>
      {/* Green dots */}
      <div> 
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-green-500 rounded-full opacity-60" 
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
         animation: 'slow-drift ${15 + Math.random() * 20}s ease-in-out infinite',
        animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </div>
      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
<span className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full">
  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
  Software Engineer React Specialist

  
</span>      
</div>
    {/* headline */}
    <div className='space-y-4'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200'>Crafting <span className="text-primary glow-text">digital</span><br/> experiences with <br /> <span className="text-white italic font-norma font-serif">precision</span></h1>
    <p className="animate-fade-in animation-delay-400 text-lg text-muted-foreground max-w-lg">
        Hi, I'm Lucky, a passionate software engineer 
        dedicated to crafting seamless digital experiences. With expertise in React, Next.js, TypeScript, and TailwindCSS, I specialize in building responsive and user-friendly web applications. 
    </p>
    </div>
    {/* CTA */}
    <div className='flex gap-10'>
        <Button size='lg'>Contact Me <ArrowRight className="w-5 h-5" /></Button>
        <DownloadButton/>
    </div>
    </div>
    {/* Right column */}
        </div>
      </div>
    </section>
  )
}

export default Hero