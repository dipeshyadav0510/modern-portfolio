import { motion } from "framer-motion";

const CvBtn = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center group bg-secondary/60 hover:bg-accent/20 px-6 py-3 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-800"
      >
        <span className="text-white/90 group-hover:text-accent text-lg font-semibold transition-colors duration-800">
          My CV
        </span>
      </a>
    </motion.div>
  );
};

export default CvBtn;
