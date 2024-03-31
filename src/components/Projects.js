import { SocialIcon } from 'react-social-icons'
import { GitHub } from 'react-feather';


export default function Projects() {
    return (
      <div className="projects-main" id="projects">
        <div className="section-header">
          <h1>Projects</h1>
          <div className="section-break"></div>
        </div>

        <div className="projects-container" >
          <div className="project-info-container">
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah'>
                <GitHub style={{width: "1em", height: "1em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>
            </div>
            <div className='project-info-title'>CHIT CHAT</div>
            <div className='project-info-description'>Distributed Chatroom Application</div>
            <div className='project-info-tools'>
              <span>React</span>
              <span>Django</span>
              <span>Python</span>
              <span>Nginx</span>
              <span>WebSocket</span>
              <span>MongoDB</span>
            </div>           
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah'>
                <GitHub style={{width: "1em", height: "1em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>
            </div>
            <div className='project-info-title'>WEALTH WAVE</div>
            <div className='project-info-description'>Budgetting & Financial Tracker</div>
            <div className='project-info-tools'>
              <span>React</span>
              <span>Sring Boot</span>
              <span>Java</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah'>
                <GitHub style={{width: "1em", height: "1em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>
            </div>
            <div className='project-info-title'>CIRCUIT CENTRAL</div>
            <div className='project-info-description'>
              Computer Products E-Commerce Store
            </div>
            <div className='project-info-tools'>
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah'>
                <GitHub style={{width: "1em", height: "1em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>  
            </div>
            <div className='project-info-title'>FOODBANK ORDER MANAGEMENT SYSTEM</div>
            <div className='project-info-description'>
              Food Hamper Creation Software
            </div>
            <div className='project-info-tools'>
              <span>Java</span>
              <span>Swing</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
        
      </div>
    )
}