import React from 'react';
import visionImage from '../assets/vision.jpg';
import missionImage from '../assets/mission.jpg';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About InnReserve</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Vision</h2>
          <h5>Your Ultimate Reservation Solution</h5>
          <div className="fakeimg mb-3">
            <img 
              src="/assets/vision.jpg" 
              alt="Vision" 
              className="img-fluid" 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </div>

	  <p>
            At InnReserve, our vision is to provide a seamless and intuitive booking experience for both hotels and restaurants. We aim to streamline the reservation process, making it easier for users to secure their stays and dining experiences with just a few clicks.
          </p>
          <p>
            We are dedicated to enhancing the hospitality experience by offering a user-friendly interface and reliable service. Our platform ensures that every booking is handled with precision, allowing users to enjoy their experiences without any hassle.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Mission</h2>
          <h5>Transforming the Way You Book</h5>
          <div className="fakeimg mb-3">
            <img 
              src="/assets/mission.jpg" 
              alt="Vision" 
              className="img-fluid" 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </div>

          <p>
            Our mission is to revolutionize the booking process for hotels and restaurants by offering a dynamic web application that caters to the modern traveler and diner. We strive to provide an efficient, reliable, and secure booking system that meets the needs of our users.
          </p>
          <p>
            By integrating advanced features and user-centric design, InnReserve aims to set new standards in the reservation industry. We are committed to continuous improvement and innovation, ensuring that our platform evolves with the needs of our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

