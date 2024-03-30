import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Navigation() {
    return (
      <div className="navigation-main">
        <div className="navigation-container">
          <span className="navigation-item"><Link to='personal' spy={true} smooth={true} duration={1000}>Personal</Link></span>
          <span className="navigation-item"><Link to='experience' spy={true} smooth={true} duration={1000}>Experience</Link></span>
          <span className="navigation-item"><Link to='projects' spy={true} smooth={true} duration={1000}>Projects</Link></span>
          <span className="navigation-item"><Link to='contact' spy={true} smooth={true} duration={1000}>Contact</Link></span> 
        </div>
      </div>     
    )
}