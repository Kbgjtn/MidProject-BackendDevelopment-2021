import React from 'react';
import './header.css';
import { motion } from 'framer-motion';
import bgHeader from '../../Assests/people.png';

const animateFormEmail = {
  hidden: {
    x: '10vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const animateContent = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      delay: 0.5,
    },
  },
};

const Header = () => {
  return (
    <div className='header-section'>
      <motion.div
        className='header-content'
        variants={animateContent}
        initial='hidden'
        animate='visible'
      >
        <h1 className='header-content-head1'>{`< Digital Learning With Us />`}</h1>
        <p className='header-content-paragrph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          delectus quod ad aspernatur. Sapiente cum voluptate neque dicta
          facilis esse aperiam nulla, numquam sequi amet quas animi beatae
          provident ducimus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quos similique quaerat voluptas illo at, illum ex dolorem
          voluptate nulla esse laudantium recusandae, suscipit vitae iste quas,
          architecto ipsam obcaecati veniam!
        </p>
        <div className='header-content-input'>
          <motion.input
            type='email'
            placeholder='Enter your email'
            whileHover={{
              scale: 1.05,
              textShadow: '1px 1px 1px rgb(33, 33, 33)',
              boxShadow: '0px 0px 8px rgb(182, 113, 113)',
              color: '#FFC0D3',
            }}
            variants={animateFormEmail}
            initial='hidden'
            animate='visible'
          />
          <motion.button
            type='button'
            whileHover={{
              scale: 1.05,
              textShadow: '0px 1px 1px rgb(33, 33, 33)',
              boxShadow: '1px 1px 1px rgb(182, 113, 113)',
              color: '#FF5C8D',
            }}
            variants={animateFormEmail}
            initial='hidden'
            animate='visible'
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
      <div className='header-content-img_bg'>
        <img src={bgHeader} alt='bgHeader' />
      </div>
    </div>
  );
};

export default Header;
