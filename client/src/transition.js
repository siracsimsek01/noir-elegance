import {  motion } from "framer-motion";

const Transition = (OgComponent) => {
  return (props) => (
    <>
      <motion.div
        className="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.74, 0.23, 0.19, 0.77] }}
      >
        <OgComponent {...props} />
      </motion.div>
    </>
  );
};


export default Transition;