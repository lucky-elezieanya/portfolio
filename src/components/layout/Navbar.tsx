"use client"
import { Menu, X } from "lucide-react"
import Button from "../Button"
import { useEffect, useState } from "react";

const links =[
     {href: "#about", label: "About"},
     {href: "#projects", label: "Projects"},
     {href: "#experience", label: "Experience"},
     {href: "#testimonials", label: "Testimonials"},
     {href: "#contact-me", label: "Contact Me"}
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Add a scroll event listener to update the hasScrolled state
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   
  
    return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${hasScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
        <nav className="bg-transparent flex justify-between items-center py-5 px-6 mx-auto">
            <a href="#" className="text-xl text-primary font-bold tracking-tight">LM 
                <span className="text-secondary-foreground font-bold text-3xl">.</span>
                </a>
                {/* desktop */}
                <div className="hidden md:flex items-center gap-1">

                <div className="links glass rounded-full px-2 py-1 gap-1 flex items-center">
{
    links.map((link, index)=>(
        <a href={link.href} key={index} className="mx-4 px-4 py-2 text-sm text-muted-foreground  hover:text-foreground hover:bg-surface rounded-full">
            {link.label}
            </a>
    ))
}
                </div>
                </div>
                {/* CTA */}
                <div className="hidden md:block">

             <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMobileMenuOpen((prev)=>!prev)} className="md:hidden p-2 rounded-full text-foreground hover:bg-surface transition-colors cursor-pointer">
                 {
isMobileMenuOpen? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />
                 } 
                </button>   
        </nav>
{/* Mobile Menu */}
{
    isMobileMenuOpen && (

<div className="md:hidden glass-strong animate-fade-in">
  <div className="mx-auto p-6 flex flex-col gap-4 container">
    {
    links.map((link, index)=>(
        <a 
        onClick={() => setIsMobileMenuOpen(false)}
        href={link.href} key={index} className="mx-4 px-4 py-2 text-lg text-muted-foreground  hover:text-foreground hover:bg-surface rounded-full">
            {link.label}
            </a>
    ))
}
   <Button size="md">Contact Me</Button>
  </div>
</div>
    )
}
    </header>
  )
}

export default Navbar