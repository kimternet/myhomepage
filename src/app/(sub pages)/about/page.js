import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>


    <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
      <RenderModel>
      <HatModel/>
    </RenderModel>
    </div>
<div className="relative w-full h-screen flex flex-col items-center justify-center">
<div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/4 -translate-x-1/2">
  <h1 className="font-bold mb-8 text-9xl text-accent">김형운</h1>
  <p className="font-light -translate-y-1 -translate-x-1 text-foreground text-ls">안녕하세요 신입 개발자 김형운입니다.</p>
</div>
</div>

<AboutDetails/>


    </>
  );
}
