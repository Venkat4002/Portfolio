import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="panel panel-left">
        <h1 className="panel-title">Hello People</h1>
        <h2 className="panel-subtitle">I am Venkateswara Rao Bhavana</h2>
      </div>

      <div className="panel panel-right">
        <h1 className="panel-title">Full Stack Developer</h1>
        <p className="panel-description">Specializing in Java and React applications.</p>
      </div>
    </div>
  );
};

export default Home;
