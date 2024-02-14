"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("hihi");
    router.push("/love");
  };
  return (
    <div className="w-screen h-screen bg-[#ffb6c1] text-black">
      <div className="flex flex-col items-center relative top-1/2 -translate-y-1/2">
        <div className="w-1/4 h-[100px] relative mb-4 translate-x-4">
          <Image src="/love.gif" fill alt="image-love" />
        </div>
        <p className="text-2xl">Henlo anh iu :3</p>
        <p>Đây là món quà 14/02 em tặng anh</p>
        <p>hi vọng anh thích</p>
        <p className="text-xl">Hong thích cũng phải thích, hehe</p>
        <button className="mt-4 bg-[#00bfce] p-2 rounded" onClick={handleClick}>
          Nhấn để đi típ
        </button>
      </div>
    </div>
  );
}
