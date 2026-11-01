import React from 'react'

const experiences = [
  {
    period: '2022 - Present',
    role: 'Software Engineer',
    company: 'Tech Company',
    description: 'Working on developing scalable web applications and improving user experience.',
    current: true,
    technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL']
  },
  {
    period: '2020 - 2022',
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    description: 'Focused on building responsive and interactive user interfaces.',
    current: false,
    technologies: ['Vue.js', 'JavaScript', 'CSS', 'HTML']
  },
  {
    period: '2018 - 2020',
    role: 'Intern',
    company: 'Software Solutions',
    description: 'Assisted in the development of internal tools and gained experience in software development lifecycle.',
    current: false,
    technologies: ['Python', 'Django', 'SQL']
  },
  {
    period: '2016 - 2018',
    role: 'Junior Developer',
    company: 'Web Creators',
    description: 'Contributed to various web development projects and learned best practices in coding.',
    current: false,
    technologies: ['PHP', 'Laravel', 'MySQL'] 
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96  bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className='container mx-auto px-6 relative z-10'>
          {/* section header */}
          <div className='max-w-3xl mb-16 '>
            <span className='text-secondary-foreground text-sm font-medium animate-fade-in tracking-wider uppercase'>Career Journey</span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary/80 animate-fade-in glow-text tracking-tight animate-fade-in animation-delay-100">
            Experiences that <span className='italic font-serif font-normal text-white'>
                speaks volumes.
               </span>
               </h2>
                  <p className='text-muted-foreground animate-fade-in animation-delay-200 py-4 px-2'>
           A timeline of my professional experiences, showcasing the roles I've held and the skills I've developed over the years.
          </p>
          </div>
          {/* Timeline */}
          <div className="relative">
            <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>
          {/* experience items */}
          <div className="space-y-12">
            {
              experiences.map((exp, idx)=>(
                <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }} >
                    {/* timeline Dot */}
                    <div className='absolute left-0 md:left-1/2 t0p-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                    {exp.current && (
                      <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>
                    )}
                    </div>

                    {/* Content */}
                    <div className={`pl-8 md:pl-0 ${idx % 2 === 0? "md:pr-16 md:text-roght": "md:col-start-2 md:pl-16"}`}>
                      <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-600 `}>
                        <span className='text-sm text-primary font-medium'>{exp.period}</span>
                      <h2 className='text-xl font-semibold mt-2'>{exp.role}</h2>
                      <p className='text-muted-foreground'>{exp.company}</p>
                      <p className='text-sm text-muted-foreground mt-4'>{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0? "md:justify-end": ""}`}>
                        {
                          exp.technologies.map((tech, tIdx)=>(
                            <span key={tIdx} className='px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground'>{tech}</span>
                          ))
                        }
                      </div>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
          </div>
        </div>
      
      </section>
  )
}

export default Experience