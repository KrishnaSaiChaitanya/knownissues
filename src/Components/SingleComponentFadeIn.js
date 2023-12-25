import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInLeftCenter = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        key={"my_unique_key"}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: "200px", height: "200px", backgroundColor: "blue" }}
      >
        {/* Your content */}
      </motion.div>
    </div>
  );
};

export default FadeInLeftCenter;
