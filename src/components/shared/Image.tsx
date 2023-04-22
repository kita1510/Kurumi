import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  isCircle?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, className,isCircle, ...props }) => {
  return (
    <motion.div variants={variants} className={className}>
      <img src={src} alt={alt} className={classNames("w-full h-full object-cover", isCircle ? "rounded-full" : "")} {...props} />
    </motion.div>
  );
};

export default React.memo(Image);
