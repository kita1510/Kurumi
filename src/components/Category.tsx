import React, { CSSProperties, Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const App = memo(() => {
  const categoryList = [
    {
      cate: "Harem",
      color: "text-red-500",
      bgHoverColor: "hover:bg-red-500",
      borderColor: "border-red-500",
    },
    {
      cate: "Slice of life",
      color: "text-red-500",
      bgHoverColor: "hover:bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      cate: "Action",
      color: "text-red-500",
      bgHoverColor: "hover:bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      cate: "Ecchi",
      color: "text-red-500",
      bgHoverColor: "hover:bg-black",
      borderColor: "border-black",
    },
    {
      cate: "Romance",
      color: "text-red-500",
      bgHoverColor: "hover:bg-orange-500",
      borderColor: "border-orange-500",
    },
    {
      cate: "Drama",
      color: "text-red-500",
      bgHoverColor: "hover:bg-yellow-500",
      borderColor: "border-yellow-500",
    },
    {
      cate: "Adventure",
      color: "text-green-800",
      bgHoverColor: "hover:bg-green-500",
      borderColor: "border-green-500",
    },
    {
      cate: "Music",
      color: "text-pink-800",
      bgHoverColor: "hover:bg-pink-500",
      borderColor: "border-pink-500",
    },
  ];

  const swiperStyle: CSSProperties = {
    height: "400px",
    justifyContent: "center",
    top: "0px",
    left: "0",
    right: "0",
    position: "absolute",
    cursor: "pointer",
    marginTop: "0px",
  };

  const swiperSlideStyle: CSSProperties = {
    width: "100%",
    height: "80px",
    paddingLeft: "30px",
    // padding: "0px auto"
  };


  return (
    <div className="flex gap-3 w-[250px] bg-white flex-col items-center font-monospace h-[400px]">
      <div className="font-semibold text-lg w-full text-white bg-red-800 text-center relative py-2 z-[100]">
        DANH SÁCH THỂ LOẠI
      </div>
      <Swiper
        direction="vertical"
        slidesPerView={4}
        centeredSlides={true}
        modules={[Pagination]}
        style={swiperStyle}
      >
        {categoryList.map((c) => (
          <Fragment>
            <SwiperSlide style={swiperSlideStyle}>
              <Link to={{ pathname: `/category/${c.cate}` }}>
                <button
                  className={`w-48 h-14 py-1 text-sm uppercase rounded-lg hover:text-white ${c.borderColor} border-2 font-semibold text-black transparent ${c.bgHoverColor}`}
                  value="Action"
                >
                  {c.cate}
                </button>
              </Link>
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </div>
  );
});

export default App;
