import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

import dynamic from "next/dynamic";
// HatModel 대신 AboutBird 사용
const AboutBird = dynamic(() => import("@/components/models/AboutBird"), { ssr: false });


export default function Home() {
  return (
    <>
      <Image src={bg} priority sizes="100vw" alt="background-image" className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>


    <div className="w-full h-3/5 xs:h-3/4 xs:h-screen absolute top-1/2 -translate-y-1/2 left-0">
      <RenderModel>
      <AboutBird/>
    </RenderModel>
    </div>
<div className="relative w-full h-screen flex flex-col items-center justify-center">
<div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/4 -translate-x-1/2">

  <h1 className="font-bold mb-8 text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent whitespace-nowrap">about me</h1>
  <p className="font-light -translate-y-1 -translate-x-1 text-foreground text-ls">안녕하세요🖐️ 신입 개발자 김형운입니다.</p>
</div>
</div>

<AboutDetails/>


    </>
  );
}
