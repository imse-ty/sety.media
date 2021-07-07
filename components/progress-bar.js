import { motion } from 'framer-motion';

export default function ProgressBar({ color }) {
  return (
    <motion.div
      initial={{ left: '-100%' }}
      animate={{ left: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={`
        fixed top-0 -left-full w-screen h-2

        ${color}
    `}
    />
  );
}

ProgressBar.defaultProps = {
  color: 'bg-wireframeRed'
};
