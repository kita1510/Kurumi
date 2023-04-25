import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import usePosts from "~/hooks/usePosts";
import "swiper/css";
import "swiper/css/pagination";
import SliderCard from "../shared/SliderCard";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const posts = usePosts();

  console.log(posts)

  return (
    <Fragment>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="w-[70%] h-[90%] absolute"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        centeredSlides={true}
      >
        {posts?.map((p) => {
          return (
            <Fragment key={p?.id}>
              <SwiperSlide className="relative">
                <SliderCard props={p} />
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </Fragment>
  );
}
