import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { PostInfo } from "~/hooks/usePost";
import { GoCalendar } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { formatYear } from "~/utils/moment";
import supabase from "~/lib/supabase";
import { Link } from "react-router-dom";
import useListPost from "~/hooks/useListPost";
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const posts = useListPost();
  // console.log(posts);

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
                <SliderCard props={p}></SliderCard>
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </Fragment>
  );
}

const SliderCard = ({ props }: { props: PostInfo }) => {
  const [cate, setCate] = useState();
  const getCategory = async (cateId: number) => {
    const { data } = await supabase.from("Category").select("*").eq("id", cateId).single();
    setCate(data?.name);
    return data?.name;
  };

  useEffect(() => {
    getCategory(3);
  }, []);

  // console.log(cate);

  return (
    <div className="w-full h-full bg-slate-200 relative">
      <img
        className="w-full h-full object-cover "
        src="https://i.pinimg.com/564x/e2/94/c6/e294c6593beacbefaf667b305eba196f.jpg"
        alt=""
      />
      <div className="absolute top-0 w-full h-full bg-opacity-50 bg-black p-5 flex gap-5">
        <div className="absolute top-0 w-3/5 h-full bg-opacity-70 bg-black left-0 p-3">
          <div className="text-white font-[600] text-3xl font-monospace mt-4 break-words text-left pl-5">
            {props?.title}
          </div>
          <div className="flex pl-5 mt-3 gap-3">
            <div className="flex items-center gap-1">
              <AiFillHeart size={16} color="red"></AiFillHeart>
              <span className="font-semibold text-white text-sm">{props?.PostOnLiked?.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <GoCalendar size={14} color="white"></GoCalendar>
              <span className="font-semibold text-white text-sm">
                {formatYear(props?.createdAt)}
              </span>
            </div>
          </div>
          <div className="text-sm text-white mt-3 font-medium pl-5 text-left">
            {props?.description}
          </div>
          <div className="mt-3 pl-5 text-left flex items-center gap-3">
            <span className="text-white text-sm font-semibold">Thể loại</span>
            {props?.Category.map((c) => (
              <Fragment key={c?.id}>
                <Link to={`/category/${c?.name}`}>
                  <button className="px-3 h-7 hover:bg-red-700 hover:border-red-700 border-white border-2 rounded-md text-sm text-white gap-3">
                    {c?.name}
                  </button>
                </Link>
              </Fragment>
            ))}
          </div>
          <Link to={`/topic/${props?.title}`}>
            <button className="bg-red-700 w-20 mt-6  h-8 text-[14px] leading-3 font-semibold text-white float-left ml-5 hover:bg-white hover:text-black">
              Đọc
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
