import { motion, useScroll, useSpring } from 'framer-motion';
import { LoremIpsum } from '../components/LoremIpsum';

export default function Reading() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <LoremIpsum />
    </>
  );
}
