// import "./styles.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import UserActive from "../shared/UserActive";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useGetAllUsers from "~/hooks/useGetAllUsers";
import useProfiles from "~/hooks/useProfiles";
import { Profile } from "~/types";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const users = useGetAllUsers();
  const profiles = useProfiles();

  return (
    <>
      {/* <svg id="progress" className="fixed top-5" width="60" height="60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}
      <div
        className="flex w-[80%] overflow-x-scroll flex-shrink-0 flex-grow-0 basis-[600px] mx-0 my-auto list-none py-5 gap-5  px-5"
        ref={ref}
      >
        <div className="absolute flex items-center justify-center h-16 ">
          <GrFormPrevious
            className="bg-slate-400 rounded-full text-white"
            size={24}
            color="white"
          />
        </div>
        {profiles?.data?.data?.map((p) => {
          return (
            <div key={p?.id}>
              <UserActive props={p} />
            </div>
          );
        })}
        <div className="absolute flex items-center justify-center right-96 h-16 ">
          <GrFormNext className="bg-slate-400 rounded-full text-white" size={24} color="white" />
        </div>
      </div>
    </>
  );
}