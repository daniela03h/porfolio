import Link from "next/link";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  return (
    <>
      <h2 className="text-4xl text-dark font-semibold text-center">
        Software Skills
      </h2>
      <div className="flex flex-wrap gap-3 justify-center py-8 ">
        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-red-500">
            <Link href="" target="_blanck">
              <FaHtml5 size={56} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">HTML</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-red-500">
            <Link href="" target="_blanck">
              <FaCss3Alt size={56} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-red-500">
            <Link href="" target="_blanck">
              <IoLogoJavascript size={56} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-red-500">
            <Link href="https://es.react.dev/" target="_blanck">
              <FaReact size={56} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">React</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 flex justify-center items-center border-2 border-red-500">
            <Link href="https://nextjs.org/" target="_blanck">
              <RiNextjsFill size={56} className="text-brown" />
            </Link>
          </div>
          <p className="text-xl text-darkRose font-bold">Next.js</p>
        </div>
      </div>
    </>
  );
}
