import React from 'react';
import {} from 'react-icons/ri';
// import { SiAltiumdesigner } from 'react-icons/si';
import './navbar.css';
import { motion } from 'framer-motion';
import Bowl from './Bowl';
import LoginPage from '../login';
const animateNavLinks = {
  whileHover: {
    scale: 1.15,
    color: '#FF5C8D',
  },
};
const svgLogo = {
  hidden: {
    rotate: -360,
  },
  visible: {
    rotate: 0,

    transition: {
      duration: 2.5,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    rotate: 720,
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  },
};

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <motion.div
          className='navbar-links-logo'
          variants={svgLogo}
          initial='hidden'
          animate='visible'
        >
          <motion.svg
            fill='#ffa4b6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='70px'
            height='65px'
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          >
            <motion.path
              variants={pathVariants}
              d='M 19 2 C 16.250484 2 14 4.2504839 14 7 C 14 9.7495161 16.250484 12 19 12 L 23 12 A 1.0001 1.0001 0 0 0 24 11 L 24 7 C 24 4.2504839 21.749516 2 19 2 z M 31 2 C 28.250484 2 26 4.2504839 26 7 L 26 19 C 26 21.749516 28.250484 24 31 24 C 33.749516 24 36 21.749516 36 19 L 36 7 C 36 4.2504839 33.749516 2 31 2 z M 19 4 C 20.668484 4 22 5.3315161 22 7 L 22 10 L 19 10 C 17.331516 10 16 8.6684839 16 7 C 16 5.3315161 17.331516 4 19 4 z M 31 4 C 32.668484 4 34 5.3315161 34 7 L 34 19 C 34 20.668484 32.668484 22 31 22 C 29.331516 22 28 20.668484 28 19 L 28 7 C 28 5.3315161 29.331516 4 31 4 z M 7 14 C 4.2504839 14 2 16.250484 2 19 C 2 21.749516 4.2504839 24 7 24 L 19 24 C 21.749516 24 24 21.749516 24 19 C 24 16.250484 21.749516 14 19 14 L 7 14 z M 43 14 C 40.250484 14 38 16.250484 38 19 L 38 23 A 1.0001 1.0001 0 0 0 39 24 L 43 24 C 45.749516 24 48 21.749516 48 19 C 48 16.250484 45.749516 14 43 14 z M 7 16 L 19 16 C 20.668484 16 22 17.331516 22 19 C 22 20.668484 20.668484 22 19 22 L 7 22 C 5.3315161 22 4 20.668484 4 19 C 4 17.331516 5.3315161 16 7 16 z M 43 16 C 44.668484 16 46 17.331516 46 19 C 46 20.668484 44.668484 22 43 22 L 40 22 L 40 19 C 40 17.331516 41.331516 16 43 16 z M 7 26 C 4.2504839 26 2 28.250484 2 31 C 2 33.749516 4.2504839 36 7 36 C 9.7495161 36 12 33.749516 12 31 L 12 27 A 1.0001 1.0001 0 0 0 11 26 L 7 26 z M 19 26 C 16.250484 26 14 28.250484 14 31 L 14 43 C 14 45.749516 16.250484 48 19 48 C 21.749516 48 24 45.749516 24 43 L 24 31 C 24 28.250484 21.749516 26 19 26 z M 31 26 C 28.250484 26 26 28.250484 26 31 C 26 33.749516 28.250484 36 31 36 L 43 36 C 45.749516 36 48 33.749516 48 31 C 48 28.250484 45.749516 26 43 26 L 31 26 z M 7 28 L 10 28 L 10 31 C 10 32.668484 8.6684839 34 7 34 C 5.3315161 34 4 32.668484 4 31 C 4 29.331516 5.3315161 28 7 28 z M 19 28 C 20.668484 28 22 29.331516 22 31 L 22 43 C 22 44.668484 20.668484 46 19 46 C 17.331516 46 16 44.668484 16 43 L 16 31 C 16 29.331516 17.331516 28 19 28 z M 31 28 L 43 28 C 44.668484 28 46 29.331516 46 31 C 46 32.668484 44.668484 34 43 34 L 31 34 C 29.331516 34 28 32.668484 28 31 C 28 29.331516 29.331516 28 31 28 z M 27 38 A 1.0001 1.0001 0 0 0 26 39 L 26 43 C 26 45.749516 28.250484 48 31 48 C 33.749516 48 36 45.749516 36 43 C 36 40.250484 33.749516 38 31 38 L 27 38 z M 28 40 L 31 40 C 32.668484 40 34 41.331516 34 43 C 34 44.668484 32.668484 46 31 46 C 29.331516 46 28 44.668484 28 43 L 28 40 z'
            />
          </motion.svg>
        </motion.div>
        <motion.div
          className='navbar-links-containers'
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          <motion.p
            whileHover={{
              scale: 1.15,
              color: '#FF5C8D',
            }}
          >
            <a href='#home'>.Home()</a>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.15,
              color: '#FF5C8D',
            }}
          >
            <a href='#course'>.Course()</a>
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.15,
              color: '#FF5C8D',
            }}
          >
            <a href='#about'>.About()</a>
          </motion.p>
        </motion.div>
      </div>
      <div>
        <Bowl />
      </div>
      <div className='navbar-link-sign'>
        <motion.p
          whileHover={{
            scale: 1.15,
            textShadow: '0px 0px 0px rgb(255, 92, 141)',
            boxShadow: '0px 0px 0px rgb(255, 92, 141)',
          }}
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 1600,
          }}
        >
          .Sign-in()
        </motion.p>
        <motion.button
          className='navbar-links-containers-button'
          type='button'
          whileHover={{
            scale: 1.07,
            textShadow: '0px 1px 1px rgb(33, 33, 33)',
            boxShadow: '0px 0px 8px rgb(182, 113, 113)',
          }}
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 1600,
          }}
        >
          .Sign-up
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
