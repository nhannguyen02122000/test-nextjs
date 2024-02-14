"use client";
import Image from "next/image";
const Love = () => {
  return (
    <div className="w-screen h-screen bg-[#ffb6c1] text-black">
      <div className="flex flex-col items-center relative top-1/2 -translate-y-1/2">
        <div className="w-1/2 h-[200px] relative">
          <Image src="/love-3.gif" fill alt="image-love" />
        </div>
        <p className="text-xl">THƯƠNG ANH NHÈOOOO</p>
        <p className="text-xl">Valentine iu thưng nhau hơn :3</p>
      </div>
    </div>
  );
};

export default Love;
