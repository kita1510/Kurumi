import React, { useState } from "react";

export interface AnimeDitspatchProps {
  animeName: string;
  setAnimeName: React.ChangeEventHandler<HTMLInputElement>;
}

interface InputProps {
  className?: string;
}

export interface AnimeProps extends AnimeDitspatchProps, InputProps {}

const Search = React.memo(
  ({ animeName, setAnimeName, className, ...prop }: AnimeProps) => {
    return (
      <div>
        <input
          type="text"
          placeholder="anime"
          value={animeName}
          onChange={setAnimeName}
          className={`${className} h-10 outline-none px-3`}
        />
      </div>
    );
  }
);

export default Search;