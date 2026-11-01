import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import AnimatedButton from '../AnimatedButton'

const projects = [
  {
    title: 'School Management System',
    description: 'A platform that manages and organizes school operations.',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: "#"
  },
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive solution for online retail operations.',
    image: '/images/project2.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: "#"
  },
  {
    title: 'Social Media Application',
    description: 'A platform for connecting and sharing with friends and communities.',
    image: '/images/project3.jpg',
    tags: ['React Native', 'Firebase'],   
    link: '#',
    github: "#"
  },

]

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      {/* bg glows */} 
      <div className="absolute top-1/4 right-0 w-96 h-96  bg-primary/5 "/>
      <div className="absolute bottom-1/4 left-0 w-64 h-64  bg-highlight/5 "/>
      <div className="container mx-auto px-4 relative z-10">
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16 animate-fade-in'>
          <span className="text-secondary-foreground text-sm font-medium">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary/80 animate-fade-in glow-text tracking-tight animate-fade-in animation-delay-100">Projects that
            <span className="italic font-serif font-normal text-white"> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200 py-4 px-2'>
            A selection of my recent works. From complex applications to innovative tools and platforms that solve real world problems 
          </p>

        </div>
        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {
            projects.map((project, idx)=> (
              <div  key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }} >
                {/* image */}
                <div className='overflow-hidden relative aspect-video'>
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-card-/50 to-transparent opacity-60"/>
                    {/* overlay links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.link} className="p-3 rounded-full glass hover:bg-primary text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5"/>
                      </a>
                      <a href={project.github} className="p-3 rounded-full glass hover:bg-primary text-primary-foreground transition-all">
                        <FaGithub className="w-5 h-5"/>
                      </a>
                    </div>
                  </div>
                  {/* Content */}
                <div className='space-y-4 p-6'>
                  <div className='items-start flex justify-bbetween'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />

                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx)=>(
                    <span key={tagIdx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                  ))}
                </div>

                </div>
              </div>
            ))
          }
        </div>
        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5'/>
          </AnimatedButton>
        </div>
      </div>

    </section>
  )
}


export default Projects