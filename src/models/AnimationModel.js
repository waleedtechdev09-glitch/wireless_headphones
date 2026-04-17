// models/AnimationModel.js
export const AnimationModel = {
  fadeUp: (delay = 0) => ({
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  })
};
