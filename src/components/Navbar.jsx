import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        
        <div className="namelogo">
            <div className="namelogo-area">
                <div className="image-area"></div>
                <p>don<span className='text-blue'>kavindu</span></p>
            </div>
        </div>
        
        <div className="navlinks">
            <div className="navlinks-area">
                <div className='active'>HOME</div>
                <div>ABOUT ME</div>
                <div>SKILLS</div>
                <div>PROJECTS</div>
                <div>CONTACT ME</div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyright-area"><p>© donkavindu 2024</p></div>
        </div>
    </div>
  )
}
