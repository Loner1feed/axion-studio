import { motion } from "framer-motion";
interface FadeInOnViewProps {
  children: React.ReactNode;
}

export const FadeInOnView: React.FC<FadeInOnViewProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7 }}
      variants={{
        visible: { opacity: 1, transform: "translateY(0px)" },
        hidden: { opacity: 0, transform: "translateY(-20px)" },
      }}
    >
      {children}
    </motion.div>
  );
};
