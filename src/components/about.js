import React, { useState } from 'react';
import './About.css'; // Ensure your CSS styles are updated
import profileImage from '../assets/Main.JPG'; // Profile image
import photo1 from '../assets/photo1.jpeg'; // Add your photos here
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import badmintonImage from '../assets/Badminton.webp'; // Sports images
import cricketImage from '../assets/Cricket.webp';
import volleyballImage from '../assets/volleyball.png';
import basketballImage from '../assets/basketball.png';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <button onClick={handleButtonClick} className="btn btn-primary about-button">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {!showDetails && (
        <div className="photo-gallery">
          {/* Flashcard-style photos */}
          <img src={photo1} alt="A beautiful landscape" loading="lazy" className="flashcard-photo" />
          <img src={photo2} alt="A portrait of me smiling" loading="lazy" className="flashcard-photo" />
          <img src={photo3} alt="Me at a tech event" loading="lazy" className="flashcard-photo" />
          <img src={photo4} alt="A day out with friends" loading="lazy" className="flashcard-photo" />
          <img src={photo5} alt="A scenic view of the mountains" loading='lazy' className="flashcard-photo" />
        </div>
      )}

      {showDetails && (
        <div className={`about-details mt-3 ${showDetails ? 'fade-in' : 'fade-out'}`}>
          <div className="profile-container">
            <img
              src={profileImage}
              alt="Venkateswara Rao Bhavana"
              loading="lazy"
              className="profile-image"
            />
          </div>

          {/* Flashcard Container */}
          <div className="flashcard-container">
            <div className="flashcard">
              <h3>Passionate Coder</h3>
              <p>I am passionate about coding and solving complex problems, which is why I regularly practice on platforms like LeetCode.</p>
            </div>
            <div className="flashcard">
              <h3>Team Player</h3>
              <p>Beyond my technical work, I thrive in collaborative environments. Whether it's contributing to a project or engaging in sports, my love for teamwork strengthens my ability to lead and work effectively with others.</p>
            </div>
            <div className='flashcard'>
              <h3>Short-Term Goal & Long-Term Goal</h3>
              <p>
                In the near future, I aim to continue improving my full-stack development skills, particularly by mastering cloud-native 
                application development and exploring advanced microservices architectures.
              </p>
              <p>
                My long-term goal is to contribute to building large-scale, high-impact software solutions that drive innovation in the tech 
                industry. I also aspire to take on leadership roles where I can mentor and guide teams toward success.
              </p>
            </div>
            <div className="flashcard">
              <h3>Attention to Detail</h3>
              <p>With a strong focus on detail and a commitment to delivering quality work, I approach every task with the goal of continuous improvement.</p>
            </div>
          </div>

          {/* Sports Image Gallery */}
          <div className="sports-gallery">
            <h3>Sports I Love</h3>
            <div className="sports-images">
              <img src={badmintonImage} alt="A player enjoying badminton" className="sports-photo" />
              <img src={cricketImage} alt="A cricket match in progress" className="sports-photo" />
              <img src={volleyballImage} alt="A volleyball game being played" className="sports-photo" />
              <img src={basketballImage} alt="A basketball court with players" className="sports-photo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
