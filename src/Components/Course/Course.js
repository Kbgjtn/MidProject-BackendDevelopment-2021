import React from 'react';
import './course.css';

const Course = ({ title, text }) => (
  <div className='course-coming-section'>
    <div className='course-coming-title'>
      <h1>{title}</h1>
    <div />
    </div>
    <div className='course-coming-text'>
      <p>{text}</p>
    </div>
  </div>
);

export default Course;
