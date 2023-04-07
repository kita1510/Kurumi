import React, { useState } from "react";
import useCategory from "~/hooks/useCategory";
import { Category } from "~/types";

const App = () => {
  const category = useCategory("Action");
  console.log(category)
  return <div className="w-20 h-10 bg-red-500"></div>;
};

export default App;
