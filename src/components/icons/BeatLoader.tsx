import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderSizeProps } from "react-spinners/helpers/props";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

const BeatLoader = ({ loading, color }: LoaderSizeProps) => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default BeatLoader;
