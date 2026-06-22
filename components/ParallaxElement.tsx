'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxElementProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxElement = ({
  children,
  offset = 50,
  className = ''
}: ParallaxElementProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
