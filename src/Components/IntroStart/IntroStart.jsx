import { Component } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Graph2_Animation from '../../assets/lottie_anim/personsitgraph_Animation.json';
import './IntroStart.scss'; // Assurez-vous que le chemin est correct

export default class DisplayLottie extends Component {
  render() {
    const slideInEffect = {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { type: 'spring', stiffness: 50 }
    };

    return (
      <div className="lottie-container"> {/* Le style de fond sera appliqué ici */}
        <motion.div {...slideInEffect} className="lottie-animation">
          <Lottie
            loop={true}
            autoplay={true}
            animationData={Graph2_Animation}
          />
        </motion.div>
        <motion.div {...slideInEffect} className="text-container">
          <h1>Qui sommes-nous</h1> {/* Titre ajouté ici */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque risus in felis pulvinar semper...</p>
        </motion.div>
      </div>
    );
  }
}
