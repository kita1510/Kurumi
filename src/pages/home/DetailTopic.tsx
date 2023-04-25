import React, { useEffect } from "react";
import { AiFillRead } from "react-icons/ai";
import { Link, Params, useParams } from "react-router-dom";
import RandomTopic from "~/components/patials/RandomTopic";
import InteractBar from "~/components/shared/InteractBar";
import Tree from "~/components/shared/Tree";
import Sidebar from "~/components/patials/Sidebar";
import usePost from "~/hooks/usePost";
import { formatDate, formatYear } from "~/utils/moment";
import Image from "~/components/shared/Image";
import Button from "~/components/shared/Button";

const DetailTopic = () => {
  const { title } = useParams<Readonly<Params<string>>>();
  console.log();

  const post = usePost(title);
  console.log(post);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleMoveToTop();
    return () => {};
  }, []);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-24 mt-0 px-20 pt-20 flex gap-5 flex-col w-full">
        <Tree name={title} rootName={"Story"}></Tree>
        <div className="flex gap-10 mt-5 w-full h-[800px]">
          <div className="w-4/6 h-[380px] bg-slate-200 relative">
            <Image
              className="w-full h-full object-cover "
              src="https://i.pinimg.com/564x/e2/94/c6/e294c6593beacbefaf667b305eba196f.jpg"
              alt=""
            />

            <div className="absolute top-0 w-full h-full bg-opacity-80 bg-black p-5 flex gap-5">
              <div>
                <Image
                  className="w-40 h-52 object-cover"
                  src="https://i.pinimg.com/564x/ed/9d/61/ed9d617e86b055589629ad79147be790.jpg"
                  alt=""
                />
                <Link to={{ pathname: `/read/${title}` }}>
                  <Button className="w-40 h-10 bg-white text-black flex items-center justify-center gap-7 hover:bg-slate-300 ">
                    <AiFillRead size={24} />
                    <span className="font-semibold">Đọc</span>
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-3xl font-monospace  text-green-500">{title}</div>
                <div className="font-normal text-sm text-white  overflow-y-scroll h-96">
                  {post?.description}
                </div>
                <div className=" flex w-full ">
                  <div className="font-semibold text-base text-white flex h-full gap-1 items-center w-[300px]">
                    <div className="">
                      <div className="font-semibold text-base text-white">Thể loại:</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {post?.Category?.map((p) => (
                          <Link to={`/category/${p?.name}`} key={p?.id}>
                            <Button
                              className={`py-1 ml-2 text-sm border-2 rounded-md px-3 bg-transparent font-semibold hover:bg-white hover:text-black`}
                            >
                              {p?.name}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col w-1/4 gap-3">
                    <div className="text-white flex flex-col">
                      <span className="text-base">Năm: </span>
                      <span className="font-semibold text-base">{formatYear(post?.createdAt)}</span>
                    </div>
                    <div className="font-semibold text-base text-white flex flex-col">
                      <span className="text-base">Lượt thích: </span>
                      <span className="font-semibold text-base">
                        {post?.PostOnLiked?.length || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <InteractBar /> */}
        <DetailInfo></DetailInfo>
        <div className="absolute right-40 top-[9.5rem]">
          <RandomTopic />
        </div>
      </div>
    </div>
  );
};

export default DetailTopic;

const DetailInfo = () => {
  return <div className="w-full h-40">
    <div>
      <div>Thông tin truyện</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>;
};
