import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css';

const animateBowl = {
  animation1: {
    x: [-500, -140],
    y: [80, -22],
    color: '#fff',
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1.2,
      },
      y: {
        yoyo: Infinity,
        duration: 0.7,
      },
    },
  },
};

const Bowl = () => {
  return (
    <>
      <motion.div
        className='bowl'
        variants={animateBowl}
        animate='animation1'
      ></motion.div>
    </>
  );
};

export default Bowl;
