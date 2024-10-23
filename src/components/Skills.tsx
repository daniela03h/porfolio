import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaReact, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="container mx-auto my-11 pt-24">
      <h2 className="text-4xl text-dark font-bold m-5 md:text-center">
        Software Skills
      </h2>
      <div className="flex flex-wrap gap-5 justify-center py-8">
        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaHtml5 size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">HTML5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaCss3Alt size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <IoLogoJavascript size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <BiLogoTypescript size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">TypeScript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaBootstrap size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">Bootstrap</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <RiTailwindCssFill size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">Tailwind</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaSass size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">Sass</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaFigma size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">figma</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <FaReact size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">React</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
              <RiNextjsFill size={64} className="text-brown" />
          </div>
          <p className="text-xl text-darkRose font-bold">Next.js</p>
        </div>

      </div>
    </div>
  );
}
