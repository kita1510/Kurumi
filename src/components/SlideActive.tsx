// import "./styles.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import UserActive from "./UserActive";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg id="progress" className="fixed top-5" width="60" height="60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
        <li><UserActive/></li>
      </ul>
    </>
  );
}
