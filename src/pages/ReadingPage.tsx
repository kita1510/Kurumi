import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "~/components/Container";
import Sidebar from "~/components/sidebar/Sidebar";

const ReadingPage = () => {
  const data = useLocation();

  console.log(data);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleMoveToTop();
    return () => {};
  }, []);
  return (
    <div>
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <Container></Container>
    </div>
  );
};

export default ReadingPage;
