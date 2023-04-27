import React from "react";
import Skeleton, { SkeletonItem } from "~/components/shared/Skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton>
      <SkeletonItem className="w-36 h-60"></SkeletonItem>
    </Skeleton>
  );
};

export default CardSkeleton;
