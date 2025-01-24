import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = ({
  text = '',
  variants,
  as: Component = 'div',
  classname = '',
  letterAnime = false,
  direction = null,
  lineAnime = false,
}) => {
  const words = text.split(' ');

  const lineVariants = direction
    ? {
        hidden: { x: direction === 'left' ? '-100%' : '100%' },
        visible: {
          x: '0%',
          transition: { duration: 1, ease: 'easeInOut' },
        },
      }
    : {};

  return (
    <Component className={`overflow-hidden ${classname}`}>
      {lineAnime && (
        <motion.div
          className="h-[2px] bg-white mb-2"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mx-1"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {letterAnime
            ? word.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))
            : word}
        </motion.span>
      ))}
    </Component>
  );
};

export default TextAnimation;
