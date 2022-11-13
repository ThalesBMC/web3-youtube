import React from "react";
import { BiCheck } from "react-icons/bi";
import moment from "moment";
import Image from "next/image";

export default function Video({ video }) {
  return (
    <div className={"flex flex-col m-5 cursor-pointer"}>
      <Image
        className={"object-cover rounded-lg w-full h-40"}
        src={`https://ipfs.io/ipfs/${video.thumbnailHash}`}
        alt=""
      />
      <div>
        <h4 className="text-md font-bold dark:text-white mt-3">
          {video.title}
        </h4>
        <p className="text-sm flex items-center text-[#878787] mt-1">
          {video.category + " • " + moment(video.createdAt * 1000).fromNow()}
        </p>
        <p className="text-sm flex items-center text-[#878787] mt-1">
          {video?.author?.slice(0, 9)}...{" "}
          <BiCheck size="20px" color="green" className="ml-1" />
        </p>
      </div>
    </div>
  );
}
