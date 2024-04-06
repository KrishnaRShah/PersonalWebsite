import { SocialIcon } from 'react-social-icons'
import { GitHub } from 'react-feather';
import Spline from '@splinetool/react-spline';



export default function Projects() {
    return (
      <div className="projects-main" id="projects">
        <div className="section-header">
          <h1>Projects</h1>
          <div className="section-break"></div>
        </div>

        <div className="projects-container" >
          <div className="project-info-container">
            <Spline style={{margin:"0px", width: "100px", height: "100px", position: "absolute"}}scene="https://prod.spline.design/mJ8q1ZiuuJM0M1np/scene.splinecode" />

            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah/ChitChat'>
                <GitHub style={{width: "2em", height: "2em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
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
            <Spline style={{margin:"20px", width: "100px", height: "100px", position: "absolute"}} scene="https://prod.spline.design/oQl2i28pB0TgX0nh/scene.splinecode" />
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah/WealthWave'>
                <GitHub style={{width: "2em", height: "2em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>
            </div>
            <div className='project-info-title'>WEALTH WAVE</div>
            <div className='project-info-description'>Budgeting & Financial Tracker</div>
            <div className='project-info-tools'>
              <span>React</span>
              <span>Sring Boot</span>
              <span>Java</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-info-container">
            <Spline style={{margin:"20px", width: "100px", height: "100px", position: "absolute"}} scene="https://prod.spline.design/WSFC3DDM9ta1G5fY/scene.splinecode" />     
            <div className='project-info-links'>        
              <a href='https://github.com/KrishnaRShah/CircuitCentral'>
                <GitHub style={{width: "2em", height: "2em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
              </a>
            </div>
            <div className='project-info-title'>CIRCUIT CENTRAL</div>           
            <div className='project-info-description'>Computer Products E-Commerce Store</div>
            <div className='project-info-tools'>
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-info-container">
            <Spline style={{marginLeft:"20px", marginTop: "100px", width: "100px", height: "100px", position: "absolute"}} scene="https://prod.spline.design/s9wprCwF-ApjdDTf/scene.splinecode" />
            <div className='project-info-links'>
              <a href='https://github.com/KrishnaRShah/FoodBank-Order-Management-System'>
                <GitHub style={{width: "2em", height: "2em"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
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
