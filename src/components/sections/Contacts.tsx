
"use client"

import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../Button'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lucky@example.com',
    href: 'mailto:lucky@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (123) 456-7890',
    href: 'tel:+11234567890'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#'
  }
]

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSending) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured. Please try again later.'
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      current_year: new Date().getFullYear(),
      title: 'New message from your portfolio contact form'
    }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      )

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.'
      })

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      })

    } catch (error) {
      console.error('EmailJS Error:', error)

      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.'
      })

    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact-me" className="py-32 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container justify-center mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mx-auto mb-16 max-w-3xl">

          <span className="text-secondary-foreground text-sm font-medium animate-fade-in tracking-wider uppercase">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-primary/80 animate-fade-in glow-text tracking-tight">
            Let's build{" "}
            <span className="italic font-serif font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 py-4 px-2">
            Have a project in mind? I'd love to hear from you! Whether you
            have a question, a collaboration idea, or just want to say hello,
            feel free to reach out. You can contact me via email, phone, or
            through the contact form below. Let's create something amazing together!
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  id="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name..."
                  type="text"
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* Submission feedback */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 rounded-xl text-sm ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
              {
                contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors  duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

                    <item.icon className="w-6 h-6 text-primary/80" />
                    </div>
                   <div>
                    <div className="text-sm text-muted-foreground">
                    <span>{item.label}</span>
                    </div>
                      <div className="font-medium">
                      {item.value}
                      </div>
                   </div>
                    
                  </a>
                ))
              }
               </div>
          {/* Avaiilability card */} 
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-muted-foreground text">
              I am currently open to new opportunities and collaborations. If you have a project in mind or would like to discuss potential partnerships, please don't hesitate to reach out. I look forward to connecting with you!
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Contacts
