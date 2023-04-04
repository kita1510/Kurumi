import React, { useEffect, useState } from "react";
import Container from "~/components/Container";
import Sidebar from "~/components/Sidebar";

const ReadingPage = () => {
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
