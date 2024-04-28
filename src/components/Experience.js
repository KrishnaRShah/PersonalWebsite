
import cnrllogo from '../assets/cnrl.jpg'; // Tell webpack this JS file uses this image


export default function Experience() {
    return (
      <div className="experience-main" id="experience">
        <div className="section-header" >
          <h1>Experience</h1>
          <div className="section-break"></div>
        </div>
      
        <div className="experience-info-container">
          <div className="experience-info-title">
            Canadian Natural Resources Limited | <span style={{color:"#BC6FF1"}}>Systems Developer Intern</span>
          </div>
          <div className="experience-info-timeline">
            January 2023 - August 2023
          </div>
          
          <div className="experience-info-responsibilities">
            <img width={240} height={163} src={cnrllogo}/>
            <ul style={{listStyleType: "disc", lineHeight:'1.6'}}>
              <li>As a full-stack developer, created a PWA to manage 2000+ in-house projects for 100+ users</li>
              <li>Created a data migration utility to import 2000+ historical projects and 15000+ project files</li>
              <li>Built a notification system, alerting users of upcoming deadlines via in-app and email notifications</li>
              <li>Optimized all database queries leading to a 60% increase in speed for large scale operations</li>
              <li>Conducted unit testing using Moq and NUnit, resulting in 75% code coverage</li>
            </ul>
          </div>
          <div className="experience-info-tools">
            <span>Blazor</span>
            <span>Syncfusion</span>
            <span>ASP.NET</span>
            <span>Entity Framework</span>
            <span>C#</span>
            <span>Oracle</span>
          </div>       
        </div>
      </div>
      
    )
}