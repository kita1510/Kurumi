import { motion, useScroll, useSpring } from "framer-motion";
import { PostInfo } from "~/hooks/usePost";

export default function Reading(props: Pick<PostInfo, "content" | "title"> | undefined) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 bg-red-600 origin-[0%]" style={{ scaleX }} />
      <h1>
        <code>{props?.title}</code>
      </h1>
      <div className="leading-8">{props?.content}</div>
    </>
  );
}
