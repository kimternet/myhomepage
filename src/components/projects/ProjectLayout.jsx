import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { FileText, Video } from 'lucide-react';

const item = {
  hidden: { scale: 0, y:100 },
  show: { scale: 1, y:0 },
};

const NavLink = motion(Link);

const ProjectLayout = ({name, description, date, demoLink, videoLink, pdfLink}) => {
  return (
    <div 
    className='text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'>{name}</h2>
            <p className='text-muted hidden sm:inline-block'>{description}</p>
        </div>

        <p className='text-muted sm:text-foreground'>
            {date}
        </p>
      </div>

      {/* 추가 링크 버튼 */}
      {(videoLink || pdfLink || demoLink) && (
        <div className='flex mt-4 space-x-4 justify-end'>
          {videoLink && (
            <NavLink 
              variants={item}
              href={videoLink} 
              target={'_blank'} 
              className='px-3 py-2 flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm'
            >
              <Video size={16} />
              <span>video</span>
            </NavLink>
          )}
          {pdfLink && (
            <NavLink 
              variants={item}
              href={pdfLink} 
              target={'_blank'} 
              className='px-3 py-2 flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm'
            >
              <FileText size={16} />
              <span>Link</span>
            </NavLink>
          )}
          {demoLink && (
            <NavLink 
              variants={item}
              href={demoLink} 
              target={'_blank'} 
              className='px-3 py-2 flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm'
            >
              <span>Github Code</span>
            </NavLink>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectLayout
