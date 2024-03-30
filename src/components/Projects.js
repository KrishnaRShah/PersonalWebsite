import { SocialIcon } from 'react-social-icons'

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
              <SocialIcon className="personal-social-icon" style={{ width :"30px", height: "30px"}} bgColor="#BC6FF1" fgColor="white" url="https://github.com/KrishnaRShah"/>
            </div>
            <div className='project-info-title'>Chit Chat</div>
            <div className='project-info-description'>
              Me and Jae started this so far from our understanding. Try opening up landingPage.html enter name  Start yapping  enter msg  send It only displays your messages, and no incoming ones. That is all we have so far.
            </div>
            <div className='project-info-tools'>
              Tools
            </div>           
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <SocialIcon className="personal-social-icon" style={{ width :"30px", height: "30px"}} bgColor="#BC6FF1" fgColor="white" url="https://github.com/KrishnaRShah"/>
            </div>
            <div className='project-info-title'>Wealth Wave</div>
            <div className='project-info-description'></div>
            <div className='project-info-tools'></div>
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <SocialIcon className="personal-social-icon" style={{ width :"30px", height: "30px"}} bgColor="#BC6FF1" fgColor="white" url="https://github.com/KrishnaRShah"/>
            </div>
            <div className='project-info-title'>Circuit Central</div>
            <div className='project-info-description'></div>
            <div className='project-info-tools'></div>
          </div>
          <div className="project-info-container">
            <div className='project-info-links'>
              <SocialIcon className="personal-social-icon" style={{ width :"30px", height: "30px"}} bgColor="#BC6FF1" fgColor="white" url="https://github.com/KrishnaRShah"/>
            </div>
            <div className='project-info-title'>Foodbank Order Mangement System</div>
            <div className='project-info-description'></div>
            <div className='project-info-tools'></div>
          </div>
        </div>
        
      </div>
    )
}