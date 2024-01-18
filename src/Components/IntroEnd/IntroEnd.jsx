import { Component } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Graph2_Animation from '../../assets/lottie_anim/Person_surroundbydata.json';
import './IntroEnd.scss'; 

export default class DisplayLottie extends Component {
  render() {
    const slideInEffect = {
      initial: { x: 100, opacity: 0 }, 
      animate: { x: 0, opacity: 1 },
      transition: { type: 'spring', stiffness: 50 }
    };

    return (
      <div className="lottie-container">
        <motion.div {...slideInEffect} className="text-container">
          {}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque risus in felis pulvinar semper...
        </motion.div>
        <motion.div {...slideInEffect} className="lottie-animation">
          {}
          <Lottie
            loop={true}
            autoplay={true}
            animationData={Graph2_Animation}
          />
        </motion.div>
      </div>
    );
  }
}
