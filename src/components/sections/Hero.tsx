import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'lucide-react'
import DownloadButton from '../DownloadButton'
import { FaArrowDown, FaFacebook, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const skills = [
    "React",
    "Typescript",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Docker",
    "AWS",
]
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
    {/* socials */}
    <div className='flex items-center gap-4 animation-fade-in animation-delay-400'>
        <span className='text-sm text-muted-foreground'>Follow me: </span>
        
            {
                [
                    {icon: FaGithub, href: '#'},
                    {icon: FaTwitter, href: '#'},
                    {icon: FaLinkedin, href: '#'},
                    {icon: FaFacebookF, href: '#'},
                ].map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className='glass rounded-full hover:bg-primary/10 hover:text-primary transition-colors transition-all duration-300 p-2'>
                        <social.icon className='w-5 h-5' />
                    </a>
                ))
            }
      
    </div>
    </div>
    {/* Right column */}
    <div className='relative animate-fade-in animation-delay-300'>
        <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
            <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-picture.png" alt="Lucky Elezieanya" 
            className='w-full aspect-[4/5] object-cover rounded-2xl'/>
            {/* floating badge */}
            <div className="absolute -bottom-4 -right-4  glass px-4 py-3 rounded-xl text-sm font-semibold shadow-lg animate-float"   >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className='text-sm font-medium'>Available to work</span>
                </div>
            </div>
            {/* floating stats */}
            <div className="absolute -top-4 -left-4  glass px-4 py-3 rounded-xl text-sm font-semibold shadow-lg animate-float">
                <div className="text-2xl font-bold text-primary">
                    5+
                </div>
                <div className="text-xs font-medium">
                    Years Exp.
                </div>
            </div>
            </div>
        </div>
    </div>
        </div>
        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee gap-6">
{
    [...skills, ...skills].map((skill, idx)=>(
        <div key={idx} className="flex-shrink-0 px-8 py-4 "> 
            <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
        </div>
    ))
   }
                </div>
            </div>
        </div>
        {/* Scroll down for more */}
        <div className="flex flex-col gap-2 items-center justify-center mt-10">
            <p className="text-sm text-muted-foreground">
                Scroll down 
            </p>
            <a href="#about" className="glass rounded-full p-3 hover:bg-primary/10 transition-colors">
                <FaArrowDown className="w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Hero