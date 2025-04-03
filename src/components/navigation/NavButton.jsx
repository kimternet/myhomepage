import { Home, User, Palette, Mail, File, Github, Phone, Linkedin, Twitter, NotebookTextIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'


const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5} />
    case "about me":
      return <User className='w-full h-auto' strokeWidth={1.5} />
    case "project":
      return <NotebookTextIcon className='w-full h-auto' strokeWidth={1.5} />
    case "contact":
      return <Phone className='w-full h-auto' strokeWidth={1.5} />
    case "Github":
      return <Github className='w-full h-auto' strokeWidth={1.5} />
    case "linkedin":
      return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
    case "twitter":
      return <Twitter className='w-full h-auto' strokeWidth={1.5} />
    case "resume":
      return <File className='w-full h-auto' strokeWidth={1.5} />

      break;
    
    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />
  }

}


const NavButton = ({x,y, label, link, icon, newTab}) => {

  return (
    <div className='absolute cursor-pointer z-50'
    style={{transform: `translate(${x}, ${y})`}}
    >
      <div className="flex flex-col items-center group">
        <Link 
        href={link} 
        target={newTab ? '_blank' : '_self'} 
        className={`text-foreground rounded-full flex items-center justify-center 
          custom-bg`}
        aria-label={label} 
        name={label}>
          <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent'>
            {getIcon(icon)}
          </span>
        </Link>
        <span className='text-xs mt-2 animate-spin-slow-reverse group-hover:pause text-foreground group-hover:bg-black group-hover:text-white px-2 py-1 rounded transition-colors duration-300'>
          {label}
        </span>
      </div>
      
    </div>
  )
}

export default NavButton
