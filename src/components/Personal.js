import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons'
import Spline from '@splinetool/react-spline';


export default function Personal() {
    return (
      <div className="personal-main" id="personal">
        <div className="personal-general-information">
          <span>Hey, I'm Krishna!</span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              3000, "I'm a Developer",
              3000, "I'm a Designer",
              3000, "I'm a Student",
              3000
            ]}
            speed={5}
            style={{ fontSize: '2em' , color: '#BC6FF1'}}
            repeat={Infinity}
          />

          <div className='personal-about-me'>I'm a passionate and dedicated 4th year Software Engineering student at the University of Calgary. 
            I have always been fascinated by the world of technology and its limitless potential to shape the future. 
            My curiosity and drive to learn led me to pursue a career in software engineering, where I can actively contribute to the development of innovative solutions.
          </div>

          <div style={{marginBlock: "20px"}}>
            <SocialIcon className="personal-social-icon" style={{ width :"40px", height: "40px", marginRight: "20px"}} bgColor="#BC6FF1" fgColor="white" url="https://www.linkedin.com/in/krishnarshah/"/>
            <SocialIcon className="personal-social-icon" style={{ width :"40px", height: "40px"}} bgColor="#BC6FF1" fgColor="white" url="https://github.com/KrishnaRShah"/>
          </div>      
        </div>

        <div className='personal-spline'>
          <Spline style={{height: "600px"}} scene="https://prod.spline.design/adEr2hAqVpV9KeBT/scene.splinecode" />
        </div>
      </div>     
    )
}