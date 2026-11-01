
"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Lucky is one of the most talented engineers I have worked with. His ability to solve complex problems and deliver high-quality code is unmatched.",
    author: "John Doe",
    role: "CTO at Tech Company",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Working with Lucky has been a pleasure. He consistently demonstrates a strong work ethic and a passion for learning.",
    author: "Jane Smith",
    role: "Product Manager at Startup Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Lucky's contributions to our projects have been invaluable. His expertise in frontend development has greatly improved our user experience.",
    author: "Alice Johnson",
    role: "Lead Developer at Software Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "I highly recommend Lucky for any software development role. His technical skills and collaborative nature make him a great asset to any team.",
    author: "Bob Wilson",
    role: "Engineering Manager at Tech Company",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    quote: "Lucky has a unique ability to understand complex requirements and translate them into elegant solutions. His work has consistently exceeded expectations.",
    author: "Carol Davis",
    role: "Director of Engineering at Tech Company",
    avatar: "https://randomuser.me/api/portraits/women/77.jpg"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalTestimonials = testimonials.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mx-auto mb-16 max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium animate-fade-in tracking-wider uppercase">
            What People Say
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-primary/80 animate-fade-in glow-text tracking-tight">
            Kind words from{" "}
            <span className="italic font-serif font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">

          <div className="relative">

            {/* Main testimonial */}
            <div
              key={currentIndex}
              className="relative glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200"
            >

              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="text-primary-foreground w-6 h-6" />
              </div>

              {/* Quote */}
              <blockquote className="md:text-2xl italic leading-relaxed mb-8 pt-4 font-light">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">

                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary"
                />

                <div>
                  <div className="font-semibold tracking-wide">
                    {currentTestimonial.author}
                  </div>

                  <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {currentTestimonial.role}
                  </div>
                </div>

              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">

              {/* Previous button */}
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={currentIndex === index ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/40 hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
