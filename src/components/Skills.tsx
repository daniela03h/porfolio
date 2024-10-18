import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="container mx-auto my-11">
      <h2 className="text-4xl text-dark font-bold text-center">
        Software Skills
      </h2>
      <div className="flex flex-wrap gap-5 justify-center py-8">
        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="" target="_blanck">
              <FaHtml5 size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">HTML5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="" target="_blanck">
              <FaCss3Alt size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="" target="_blanck">
              <IoLogoJavascript size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="https://es.react.dev/" target="_blanck">
              <FaReact size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">React</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="https://nextjs.org/" target="_blanck">
              <RiNextjsFill size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">Next.js</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="https://www.figma.com/" target="_blanck">
              <FaFigma size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">figma</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="https://www.typescriptlang.org/" target="_blanck">
              <BiLogoTypescript size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">TypeScript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-lightPink rounded py-2">
            <Link href="https://tailwindcss.com/" target="_blanck">
              <RiTailwindCssFill size={64} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">Tailwind</p>
        </div>
      </div>
    </div>
  );
}
