import React from 'react';
import './Projects.css';
import { faServer, faMobileAlt, faDatabase, faCode, faSync, faCloud, faNetworkWired, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ucImage from '../assets/uc_experience.png'; // Add appropriate images
import cognizantImage from '../assets/cognizant_experience.png';

const Projects = () => {
  return (
    <div className="experience-container">
      <div className="experience-grid">
        {/* Experience 1 - University of Cincinnati */}
        <div className="experience-card">
          <img src={ucImage} alt="University of Cincinnati Experience" className="experience-image" loading="lazy" />
          <div className="experience-description">
            <h3>Full Stack Developer (Intern)</h3>
            <h4>University of Cincinnati, Cincinnati, Ohio</h4>
            <p><strong>Apr 2023 - Apr 2024</strong></p>
            <ul>
              <li><FontAwesomeIcon icon={faServer} /> Developed scalable backend systems using Java Spring Boot, REST APIs, improving data retrieval by 20%.</li>
              <li><FontAwesomeIcon icon={faMobileAlt} /> Created responsive front-end interfaces improving user experience by 30%.</li>
              <li><FontAwesomeIcon icon={faDatabase} /> Automated data handling with Excel VBA Macros, cutting manual input by 40%.</li>
              <li><FontAwesomeIcon icon={faCode} /> Led ReactJS development improving UI interactivity and reducing load times by 20%.</li>
              <li><FontAwesomeIcon icon={faSync} /> Integrated CI/CD pipelines using GitLab CI and Jenkins, reducing deployment time by 35%.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 - Cognizant (Johnson & Johnson) */}
        <div className="experience-card">
          <img src={cognizantImage} alt="Cognizant Experience (Johnson & Johnson)" className="experience-image" loading="lazy" />
          <div className="experience-description">
            <h3>Cloud Engineer</h3>
            <h4>Cognizant Technology Services (Johnson & Johnson)</h4>
            <p><strong>Jul 2021 - Jul 2022</strong></p>
            <ul>
              <li><FontAwesomeIcon icon={faCloud} /> Developed custom solutions using NetSuite ERP, improving efficiency by 40%.</li>
              <li><FontAwesomeIcon icon={faNetworkWired} /> Integrated NetSuite ERP with SAP Cloud Manufacturing improving visibility by 45%.</li>
              <li><FontAwesomeIcon icon={faChartLine} /> Automated financial reporting with Excel VBA Macros, reducing reporting time by 50%.</li>
              <li><FontAwesomeIcon icon={faDatabase} /> Led RESTful API development for real-time data exchange reducing manual effort by 60%.</li>
              <li><FontAwesomeIcon icon={faCogs} /> Managed CI/CD pipelines ensuring smooth software delivery, cutting deployment times by 40%.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
