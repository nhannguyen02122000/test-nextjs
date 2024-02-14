"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

const Love = () => {
  const router = useRouter();
  const count = useRef(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [textSize, setTextSize] = useState("text-base");
  console.log("rerender", { textSize, top, left });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickYes = () => {
    router.push("/yes");
  };

  const handleClickNo = () => {
    // if (!buttonRef.current) return;
    if (count.current < 1) {
      setTextSize(
        count.current === 0 ? `text-xl` : `text-${count.current + 1}xl`
      );
      console.log(
        count.current === 0 ? `text-xl` : `text-${count.current + 1}xl`
      );
      count.current++;
      return;
    } else {
      if (!buttonRef.current) return;
      let top =
        Math.random() *
        (window.innerWidth - +buttonRef.current.style.width) *
        0.2;
      let left =
        Math.random() *
        (window.innerWidth - +buttonRef.current.style.height) *
        0.2;
      setTop(Math.round(Math.random() > 0.5 ? top : -top));
      setLeft(Math.round(Math.random() > 0.5 ? left : -left));
    }
    count.current++;
  };

  return (
    <div className="w-screen h-screen bg-[#ffb6c1] text-black">
      <div className="flex flex-col items-center relative top-1/2 -translate-y-1/2">
        <div className="w-1/2 h-[200px] relative">
          <Image src="/love-2.png" fill alt="image-love" />
        </div>
        <p className="text-xl">THƯƠNG EM HONGGGGGG</p>
        <div className="mt-4 flex gap-2 relative">
          <button
            className={`bg-[#a6a2f5] p-2 rounded relative text-base z-10`}
            style={{ top: `${top}px`, left: `${left}px` }}
            onClick={handleClickNo}
            ref={buttonRef}
          >
            Hongggg
          </button>
          <button
            className={`bg-[#00bfce] p-2 rounded ${textSize} relative`}
            onClick={handleClickYes}
          >
            Thương chớ saooo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Love;
