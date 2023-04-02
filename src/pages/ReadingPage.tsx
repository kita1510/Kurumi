import React from "react";
import Container from "~/components/Container";
import Navbar from "~/components/Navbar";

const ReadingPage = () => {
  return (
    <div>
      <div className="fixed left-0 top-0">
        <Navbar />
      </div>
      <Container></Container>
    </div>
  );
};

export default ReadingPage;
