import { motion, useScroll, useSpring } from "framer-motion";
import { useParams } from "react-router-dom";
import { PostInfo } from "~/hooks/usePost";
import { Author } from "~/types";
import moment from "moment";
import { formatDate } from "~/utils/moment";

export default function Reading(
  props: Pick<PostInfo, "content" | "title" | "createdAt"> &
    Omit<Author, "password" | "id" | "Role" | "email">,
) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(moment(props?.createdAt?.toLocaleString()).format("LLL"));

  const param = useParams();

  return (
    <>
      <motion.div
        className=" fixed inset-x-0 top-0 h-3 bg-red-600 origin-[0%]"
        style={{ scaleX }}
      />
      <h1>
        <code>{props?.title}</code>
      </h1>
      <div className="flex justify-center gap-10">
        <div>
          Được đăng bởi : <b>{props?.name}</b>
        </div>
        <div>
          Ngày đăng : <b>{formatDate(props?.createdAt)}</b>
        </div>
      </div>
      <div className="leading-8 mt-20">{props?.content}</div>
    </>
  );
}
