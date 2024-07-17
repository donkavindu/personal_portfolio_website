import React from 'react'
import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className='home-page'>

      <div className='animate-plane'></div>
      
      <div className="home-page-image">
        <div className="home-page-image-area"></div>
      </div>
      
      <div className="home-page-text">
        <div className="home-page-text-area">
          <h1><span className="blue-text">KAVINDU</span> LAKSHAN</h1>
          <span className='proffesion'>Front-End Developer | Web Motion Designer</span>
          <div className='social-media'>
            <LinkedInIcon/>
            <GitHubIcon/>
          </div>
          
        </div>
      </div>

    </div>
  )
}
