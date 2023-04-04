import React, { memo, useEffect, useState } from 'react';

import { CgArrowUpO } from 'react-icons/cg';

const ScrollOnTop = memo(() => {
  const [isScrool, setIsScrool] = useState(false);

  const handleScrool = () => {
    window.onscroll = () => {
      setIsScrool(window.scrollY > 500 ? true : false);
    };
  };

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    handleScrool();
    return () => {};
  }, [window.scrollY]);

  return (
    <div>
      {isScrool && (
        <div
          className="fixed bottom-4 cursor-pointer right-4 px-4 py-2 bg-green-600 text-white rounded-lg flex justify-center items-center gap-2"
          onClick={handleMoveToTop}
        >
          {/* <div className="font-semibold">Scrool On Top</div> */}
          <CgArrowUpO size={30} color="white" />
        </div>
      )}
    </div>
  );
});

export default ScrollOnTop;
