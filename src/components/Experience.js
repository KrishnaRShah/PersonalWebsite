
import cnrllogo from '../assets/cnrl.jpg'; // Tell webpack this JS file uses this image
import selestelogo from '../assets/seleste2.png'; // Tell webpack this JS file uses this image
import uofclogo from '../assets/uofc.avif'; // Tell webpack this JS file uses this image

export default function Experience() {
    return (
      <div className="experience-main" id="experience">
        <div className="section-header" >
          <h1>Experience</h1>
          <div className="section-break"></div>
        </div>

        <div className="experience-info-container">
          <div className="experience-info-title">
            Seleste | <span style={{color:"#BC6FF1"}}>Software Engineer Intern</span>
          </div>
          <div className="experience-info-timeline">
            May 2024 - Present
          </div>
          
          <div className="experience-info-responsibilities">
            <img width={240} height={240} src={selestelogo}/>
            <ul style={{listStyleType: "disc", lineHeight:'1.6'}}>
              <li>Completing R&D work to improve image-to-speech conversion and accessibility for smart glasses for the visually impaired.</li>
              <li>Implemented 2 models for document and border detection, optimizing processing time to 300ms to ensure quick real-time feedback to the user, using Swift and Apple’s Vision framework.</li>
              <li>Implemented image compression on all outgoing GPT requests, reducing network latency by 50%</li>
              <li>Led a complete UI/UX overhaul and refactored the entire application using React Native and TypeScript.</li>
              <li>Integrated in-app font scaling features to adapt the application layout according to users’ accessibility settings</li>
            </ul>
          </div>
          <div className="experience-info-tools">
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Swift</span>
          </div>       
        </div>

        <div className="experience-info-container">
          <div className="experience-info-title">
            University of Calgary | <span style={{color:"#BC6FF1"}}>Undergraduate Machine Learning Researcher</span>
          </div>
          <div className="experience-info-timeline">
            May 2024 - Sept 2024
          </div>
          
          <div className="experience-info-responsibilities">
            <img width={240} height={240} src={uofclogo}/>
            <ul style={{listStyleType: "disc", lineHeight:'1.6'}}>
              <li>Data mined over 300K user reviews from 30+ healthcare applications on the Google Play Store and Apple Store.</li>
              <li>Employed keyword classification and natural language processing (NLP) techniques, to categorize data into 15+ potential ethical violations, using Python and NLPK.</li>
              <li>Utilized K-Fold Cross Validation to train DistilBERT and GPT models on a pre-existing ethical concern dataset, leveraging PyTorch.</li>
              <li>Performed a comparative analysis of model accuracy in identifying potential ethical concerns in unseen user reviews, achieving a highest accuracy of 85%.</li>
            </ul>
          </div>
          <div className="experience-info-tools">
            <span>Python</span>
            <span>PyTorch</span>
            <span>NLPK</span>
            <span>Scikit-learn</span>
          </div>       
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