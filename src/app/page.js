import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

// 새로운 BlueBird 모델로 변경
const BlueBird = dynamic(() => import("@/components/models/BlueBird"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" fill className = "w-full h-full object-cover object-center opacity-25"/>

   <div className="w-full h-screen">
    {/*네비게이션 3D 모델 렌더링*/}
    <Navigation/>
    <RenderModel>
      <BlueBird/>
    </RenderModel>

   </div>
    </main>
  );
}
