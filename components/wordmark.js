import { motion } from 'framer-motion';

export default function Wordmark({ setyColor, mediaColor }) {
  const transition = 'transition-colors duration-500';
  const svgVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const pathVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.svg
      variants={svgVariant}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1680 334.72"
    >
      <motion.path
        d="M82.88,253.12C36.48,253.12.64,228.8,0,186.56H48c1.28,17.92,13.12,29.76,33.92,29.76,21.12,0,33.6-11.2,33.6-27.2C115.52,140.8.32,169.92.64,89c0-40.32,32.64-64.64,78.72-64.64,45.76,0,77.12,23.36,80,63.68H110.08c-1-14.72-12.8-26.24-32-26.56-17.6-.64-30.72,8-30.72,26.24,0,44.8,114.56,19.84,114.56,98.56C161.92,221.44,133.76,253.12,82.88,253.12Z"
        fill={setyColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M278.08,253.76c-51.52,0-89-35.84-89-91.52,0-56,36.48-91.52,89-91.52,51.2,0,87.36,34.88,87.36,87.68a104.71,104.71,0,0,1-1.28,17.28H234.56c2.24,26.24,20.16,41,42.56,41,19.2,0,29.76-9.6,35.52-21.44H361C351.36,227.84,321.92,253.76,278.08,253.76ZM234.88,145.6H319c-.64-23.36-19.2-38.08-42.24-38.08C255.36,107.52,238.4,121.28,234.88,145.6Z"
        fill={setyColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M405.12,110.4H384V73.6h21.12V29.76h45.12V73.6h39.68v36.8H450.24v85.76c0,11.84,4.8,17,18.88,17h20.8v37.76H461.76c-33.92,0-56.64-14.4-56.64-55Z"
        fill={setyColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M644.16,73.6h47.68L582.08,334.72H534.4l38.4-88.32-71-172.8H552l45.76,123.84Z"
        fill={setyColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M715.84,27.52h50.88l71,166.08,71-166.08h50.56V250.88h-44.8V105.6L854.72,250.88H820.8L760.64,105.6V250.88h-44.8Z"
        fill={mediaColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M1081,253.76c-51.52,0-89-35.84-89-91.52,0-56,36.48-91.52,89-91.52,51.2,0,87.36,34.88,87.36,87.68a104.71,104.71,0,0,1-1.28,17.28h-129.6c2.24,26.24,20.16,41,42.56,41,19.2,0,29.76-9.6,35.52-21.44h48.32C1154.24,227.84,1124.8,253.76,1081,253.76Zm-43.2-108.16h84.16c-.64-23.36-19.2-38.08-42.24-38.08C1058.24,107.52,1041.28,121.28,1037.76,145.6Z"
        fill={mediaColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M1270.72,70.72c23.36,0,45.76,10.88,57.92,27.52V14.08h45.44v236.8h-45.44V224.64c-10.56,16.32-30.4,29.12-58.24,29.12-45.12,0-81-36.8-81-92.16S1225.28,70.72,1270.72,70.72Zm11.2,39.36c-24,0-46.72,17.92-46.72,51.52s22.72,52.8,46.72,52.8c24.64,0,47-18.56,47-52.16S1306.56,110.08,1281.92,110.08Z"
        fill={mediaColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M1413.12,26.24c0-14.72,11.52-26.24,27.52-26.24,15.68,0,27.52,11.52,27.52,26.24s-11.84,26.24-27.52,26.24C1424.64,52.48,1413.12,41,1413.12,26.24Zm4.8,47.36h44.8V250.88h-44.8Z"
        fill={mediaColor}
        className={transition}
        variants={pathVariant}
      />
      <motion.path
        d="M1576.32,70.72c28.48,0,48,13.44,58.56,28.16V73.6H1680V250.88h-45.12V225c-10.56,15.36-30.72,28.8-58.88,28.8-44.8,0-80.64-36.8-80.64-92.16S1531.2,70.72,1576.32,70.72Zm11.52,39.36c-24,0-46.72,17.92-46.72,51.52s22.72,52.8,46.72,52.8c24.64,0,47-18.56,47-52.16S1612.48,110.08,1587.84,110.08Z"
        fill={mediaColor}
        className={transition}
        variants={pathVariant}
      />
    </motion.svg>
  );
}

Wordmark.defaultProps = {
  setyColor: '#F5F5F5',
  mediaColor: '#DD1444'
};
