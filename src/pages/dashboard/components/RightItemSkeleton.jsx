import React from "react";

const RightItemSkeleton = ({ none = false }) => {
  return (
    <div className="bg-white h-[58px] rounded-[4px] px-[5px] py-[7px] flex items-center justify-center">
      <div className="bg-color-secondary-2 h-full w-full flex items-center justify-center">
        {none && <span>None</span>}
      </div>
    </div>
  );
};

export default RightItemSkeleton;
