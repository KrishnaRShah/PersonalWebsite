import { Mail, GitHub, Linkedin } from 'react-feather';


export default function Contact() {
    return (
      <div className="contact-main" id="contact">
        <div style={{color: "white", margin: "10px 0 10px 0"}}>© Krishna Shah</div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/krishnarshah" target="_blank">
            <Linkedin style={{width: "1em", height: "1em", margin: "10px 0 10px 0"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>    
          </a>
          <a href="mailto:krishnarshah@outlook.com">
            <Mail style={{width: "1em", height: "1em", margin: "10px 0 10px 0"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
          </a>
          <a href='https://github.com/KrishnaRShah'>
            <GitHub style={{width: "1em", height: "1em", margin: "10px 0 10px 0"}} color='white' fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/>
          </a>      
        </div> 
      </div>
    )
}