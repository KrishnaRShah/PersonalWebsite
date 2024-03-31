
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
            Canadian Natural Resources Limited | <span style={{color:"#892CDC"}}>Systems Developer Intern</span>
          </div>
          <div className="experience-info-timeline">
            January 2023 - August 2023
          </div>
          
          <div className="experience-info-responsibilities">
            <img width={240} height={163} src={cnrllogo}/>
            <ul style={{listStyleType: "disc", lineHeight:'1.6'}}>
              <li>As a full-stack developer, created a PWA (QA-Audit) to manage 2000+ in-house projects for 100+ users</li>
              <li>Initially designed 10+ UI mock-ups using Miro and assisted in creating the QA-Audit data model</li>
              <li> Designed, developed, and implemented 20+ new features and a 50+ NUnit tests to ensure code quality</li>
              <li>Created data migration utility to import 2000+ historical projects and 15000+ project files</li>
              <li>Conducted sprint review sessions with users and facilitated testing sessions in preparation for launch</li>
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