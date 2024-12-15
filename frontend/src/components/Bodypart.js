import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

const PartnershipSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      filter: 'blur(20px)',
      x: -50
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(20px)',
      x: 50
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-8 py-4 gap-6 lg:gap-20"
    >
      <div 
        className="flex-1 max-w-xl"
        // variants={textVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl text-teal-950 font-medium mb-4 sm:mb-10 lg:mb-16"
          variants={textVariants}
        >
          Your Best Value in Process Automation
        </motion.h2>
        
        <motion.p 
          className="ml-2 text-2xl md:text-3xl lg:text-4xl text-teal-950 font-medium mb-0 md:mb-2 italic"
          variants={textVariants}
        >
          Delivering Excellence with
        </motion.p>
        
        <motion.div 
          className="ml-2 text-2xl md:text-3xl lg:text-4xl text-green-50 font-medium italic mb-1 sm:mb-6 lg:mb-10"
          variants={textVariants}
        >
          <RotatingText />
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg lg:text-xl text-teal-950 font-extralight"
          variants={textVariants}
        >
          Committed to forging win-win partnerships and becoming a trusted ally for distributors and solution integrators.
        </motion.p>
      </div>

      <motion.div 
        className="flex-1 lg:mt-6"
        variants={imageVariants}
      >
        <motion.img
          className="w-full h-auto max-w-md md:max-w-2xl"
          src="/Assets/goldenbridge.png"
          alt="Water"
          variants={imageVariants}
        />
      </motion.div>
    </motion.div>
  );
};

export default PartnershipSection;