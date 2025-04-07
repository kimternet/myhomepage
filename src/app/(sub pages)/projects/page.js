import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData} from "../../data";
// import Staff from "@/components/models/Staff";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

// Staff 대신 BirdHouse 모델로 교체
const BirdHouse = dynamic(() => import("@/components/models/BirdHouse"), { ssr: false });

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" priority sizes="100vw" className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>

      <ProjectList projects={projectsData} />

      {/* 새집 모델 위치 조정 */}
      <div className="flex items-center justify-center fixed -z-10 h-screen sm:w-full md:w-1/4 left-0 right-0 mx-auto md:mx-0 md:left-[4vw] md:right-auto bottom-[-12vh]">
        <RenderModel>
          <BirdHouse/>
        </RenderModel>
      </div>
    </>
  );
}
