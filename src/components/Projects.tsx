import Link from "next/link";
import Image from "next/image";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";

export default function Projects() {
  return (
    <div className="container mx-auto pt-20">
      <h2 className="text-4xl text-dark font-bold text-center">Proyectos</h2>

      <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5 p-2 md:border-none">
        <div className="flex flex-col gap-5 my-5 md:w-1/2">
          <h4 className="text-2xl text-darkRose font-bold text-center">
            To Do-List
          </h4>
          <p className="text-xl text-brown text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
            nostrum delectus eum similique culpa a ipsa vero laboriosam, ullam
            ratione officiis error accusantium distinctio iusto vel numquam
            beatae veniam?
          </p>
          <div className="flex gap-2 justify-end">
            <RiNextjsFill size={32} className="text-brown" />
            <RiTailwindCssFill size={32} className="text-brown" />
          </div>
        </div>

        <Link href="" target="_blanck">
          <Image
            src="/img/to-do-list.jpg"
            alt="img"
            width={400}
            height={250}
            // className="border border-red-600"
          ></Image>
        </Link>
      </div>

      <div className="container mx-auto flex flex-wrap my-5">
        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5 p-2 md:border-none">
          <Link href="https://parking-now.vercel.app/" target="_blanck">
            <Image
              src="/img/parking-now.jpg"
              alt="img"
              width={400}
              height={250}
              // className="border border-red-600"
            ></Image>
          </Link>

          <div className="flex flex-col gap-5 my-5 md:w-1/2">
            <h4 className="text-2xl text-darkRose font-bold text-center">
              Parking Now
            </h4>
            <p className="text-xl text-brown text-justify">
              Parking Now es una aplicación web desarrollada para facilitar la
              movilidad y el estacionamiento en la ciudad de Medellín, brindando
              una plataforma para las personas que buscan espacios de parqueo y
              para quienes desean generar ingresos mediante el alquiler de sus
              parqueaderos.
            </p>
            <div className="flex gap-2 justify-end">
              <RiNextjsFill size={32} className="text-brown" />
              <SiStyledcomponents size={32} className="text-brown" />
              <FaCss3Alt size={32} className="text-brown" />
            </div>
          </div>
        </div>

        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5 p-2 md:border-none">
          <div className="flex flex-col gap-5 my-5 md:w-1/2">
            <h4 className="text-2xl text-darkRose font-bold text-center">
              MovieMatch
            </h4>
            <p className="text-xl text-brown text-justify">
              MovieMatch tiene como objetivo proporcionar a los usuarios
              recomendaciones de películas personalizadas basadas en sus géneros
              preferidos facilmente.
            </p>
            <div className="flex gap-2 justify-end">
              <FaHtml5 size={32} className="text-brown" />
              <FaCss3Alt size={32} className="text-brown" />
              <IoLogoJavascript size={32} className="text-brown" />
              <FaBootstrap size={32} className="text-brown" />
              <FaSass size={32} className="text-brown" />
            </div>
          </div>
          <Link
            href="https://github.com/daniela03h/moviematch"
            target="_blanck"
          >
            <Image
              src="/img/movie-match.jpg"
              alt="img"
              width={400}
              height={250}
              // className=""
            ></Image>
          </Link>
        </div>

        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5 p-2 md:border-none">
          <Link
            href="https://daniela03h.github.io/countries-explorer/"
            target="_blanck"
          >
            <Image
              src="/img/countries-explorer.jpg"
              alt="img"
              width={400}
              height={250}
              // className="border border-red-600"
            ></Image>
          </Link>

          <div className="flex flex-col gap-5 my-5 md:w-1/2">
            <h4 className="text-2xl text-darkRose font-bold text-center">
              Countries Explorer
            </h4>
            <p className="text-xl text-brown text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
              nostrum delectus eum similique culpa a ipsa vero laboriosam, ullam
              ratione officiis error accusantium distinctio iusto vel numquam
              beatae veniam?
            </p>
            <div className="flex gap-2 justify-end">
              <FaHtml5 size={32} className="text-brown" />
              <FaCss3Alt size={32} className="text-brown" />
              <IoLogoJavascript size={32} className="text-brown" />
            </div>
          </div>
        </div>

        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5 p-2 md:border-none">
          <div className="flex flex-col gap-5 my-5 md:w-1/2">
            <h4 className="text-2xl text-darkRose font-bold text-center">
              Social-media-dashboard
            </h4>
            <p className="text-xl text-brown text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              distinctio illum sunt corporis quos magnam error possimus eius
              facilis provident similique, nemo corrupti ullam quas minus
              architecto quia exercitationem. Praesentium.
            </p>
            <div className="flex gap-2 justify-end">
              <FaHtml5 size={32} className="text-brown" />
              <FaCss3Alt size={32} className="text-brown" />
              <IoLogoJavascript size={32} className="text-brown" />
              <FaBootstrap size={32} className="text-brown" />
              <FaSass size={32} className="text-brown" />
            </div>
          </div>
          <Link
            href="https://daniela03h.github.io/social-media-dashboard/"
            target="_blanck"
          >
            <Image
              src="/img/social-media-dashboard.jpg"
              alt="img"
              width={400}
              height={250}
              // className=""
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
