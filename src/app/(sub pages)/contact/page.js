import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image 
        src={bg} 
        alt="background-image"
        priority sizes="100vw"
        className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">

        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact Me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            새로운 기회와 도전에 언제나 열려있습니다. 많은 연락 부탁드립니다!
          </p>
        </div>
        <Form/>


      </article>



    </>
  );
};
