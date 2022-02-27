import React, { useEffect } from 'react';
import './content.css';
import Course from '../../Components/Course/Course';
import contentBg from '../../assests/object.png';
import { motion } from 'framer-motion';
import { useCycle } from "framer-motion";

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const animateBgV1 = {
  initial: { y: -200, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.9 } }
}

const animateBgLow = {
  animate1: { x: -250, opacity: 1, transition: { duration: 0.5 } },
  animate2: {
    y: [0, -25],
    opacity: 1,
    transition: { yoyo: Infinity, ease: "easeIn" }
  }
};

const Content = () => {
  const [animation, cycleAnimation] = useCycle("animate1", "animate2");
  useEffect(() => {
    setTimeout(() => {
      cycleAnimation();
    }, 1.6);
  }, []);
  return (
  
  <motion.div className='course-section' id='c-coming'variants={animateBgV1} animate='animate'>
    <motion.div variants={animateBgLow} animate={animation}>
      <img src={contentBg} alt='contentBg' />
    </motion.div>
    <div className='course-coming-heading'>
      <h1 className='Course-head1'>{`< Our Coming Course />`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat
        odit laboriosam dolores eum illum dolorem debitis doloremque maiores,
        exercitationem enim officiis sed dolore nobis incidunt magni optio eos
        reiciendis. Ad odio amet numquam eligendi! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Error deserunt laboriosam doloremque
        tempore repellat tenetur veniam explicabo quia itaque suscipit.
        Accusamus alias dolorem maxime deserunt labore veritatis, praesentium ab
        est.
      </p>
    </div>
    <div className='explain-container'>
      {featuresData.map((item, index) => (<Course title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </motion.div>
  );
};

export default Content;
