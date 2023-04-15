import React, { CSSProperties } from "react";
import { MoonLoader } from "react-spinners";
import { LoaderSizeProps } from "react-spinners/helpers/props";

const cssOverride: CSSProperties = {
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 999999,
};
const App = ({ loading }: LoaderSizeProps) => {
  return <MoonLoader cssOverride={cssOverride} size={30} color="#000000" loading={loading} />;
};

export default App;
