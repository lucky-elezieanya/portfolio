import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'I have experience in both front-end and back-end development, allowing me to create complete web applications from start to finish.', 
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'I am skilled in optimizing web applications for speed and efficiency, ensuring a smooth user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration and Communication',
    description: 'I am a strong communicator and team player, able to work effectively with designers, developers, and stakeholders to deliver high-quality projects.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'I have a strong analytical mindset and enjoy tackling complex problems, finding innovative solutions to technical challenges.', 
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'I am committed to staying up-to-date with the latest technologies and best practices in web development, constantly improving my skills and knowledge.',
  }
]

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary/80 animate-fade-in glow-text tracking-tight animate-fade-in animation-delay-100">
            Building the future,
            <span className="italic font-serif font-normal text-white"> one component at a time</span>
          </h2>
          <div className="space-y-4 text-muted-foreground animation-fade-in animation-delay-300">
            <p>I am a passionate full-stack developer with a strong focus on creating efficient and scalable web applications. With a background in both frontend and backend technologies, I bring a comprehensive approach to software development.

            </p>
            <p>
              My expertise lies in building responsive and user-friendly interfaces, as well as designing robust server-side architectures. I am constantly exploring new technologies and best practices to stay ahead in the ever-evolving world of web development.
            </p>
            <p>
              I thrive in collaborative environments, working closely with cross-functional teams to deliver high-quality solutions. My goal is to create impactful digital experiences that not only meet user needs but also drive business success.
            </p>
          </div>
          <div className="glass rounded-2xl p-6  glow-border">
            <p className="text-foreground text-lg italic font-medium">
              My mission is to leverage my skills and knowledge to contribute to innovative projects that make a difference. I am always eager to take on new challenges and push the boundaries of what is possible in web development.
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary/80">My Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index}
              style={{ animationDelay: `${(index + 1) * 100}ms` }} 
              className="glass p-6 rounded-2xl animate-fade-in animation-delay-[${index * 100}ms]">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-lg">
                <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-primary/80 font-serif mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>  
          </div>  
          ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About;