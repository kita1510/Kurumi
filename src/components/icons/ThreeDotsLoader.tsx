import React, { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import { LoaderSizeProps } from "react-spinners/helpers/props";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

const ThreesDotLoader = ({ loading }: LoaderSizeProps) => {
  return (
    <div>
      <BeatLoader color="#385264" cssOverride={override} loading={loading} />
    </div>
  );
};

export default ThreesDotLoader;
