import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const images = [
  "https://i.pinimg.com/564x/e2/94/c6/e294c6593beacbefaf667b305eba196f.jpg",
  "https://wallpapers.com/images/featured/yv96zrvdnvfbt8nn.jpg",
  "https://wallpaper.dog/large/10723194.jpg",
  "https://wallpaper.dog/large/6651.png",
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Example() {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <motion.div className="relative w-[600px] h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            className="w-[600px] h-[350px] object-cover object-center absolute"
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          ></motion.img>
        </AnimatePresence>
        <div className="next right-3" onClick={() => paginate(1)}>
          <GrFormNext />
        </div>
        <div className="prev left-3" onClick={() => paginate(-1)}>
          <GrFormPrevious />
        </div>
      </motion.div>
    </>
  );
}
