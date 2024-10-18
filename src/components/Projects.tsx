import Link from "next/link";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-dark font-bold text-center">Proyectos</h2>

      <div className="container mx-auto flex flex-wrap my-5">
        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5">
          <Link href="https://parking-now.vercel.app/" target="_blanck">
            <Image
              src="https://i.pinimg.com/originals/6b/b3/4d/6bb34d037ad77b2097cb9712bf543cd2.jpg"
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
            <p className="text-xl text-dark font-semibold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              animi odio consequatur praesentium, quis esse nulla dolor
              perferendis neque corrupti fugit ab ad facilis, cupiditate
              mollitia eos vel, ullam rerum.
            </p>
            <div className="flex gap-2 justify-end">
              <FaHtml5 size={32} className="text-brown" />
              <RiNextjsFill size={32} className="text-brown" />
            </div>
          </div>
        </div>

        <div className="container w-auto flex flex-wrap gap-4 justify-center items-center border-2 border-lightPink rounded m-5">
          <div className="flex flex-col gap-5 my-5 md:w-1/2">
            <h4 className="text-2xl text-darkRose font-bold text-center">
              Parking Now
            </h4>
            <p className="text-xl text-dark font-semibold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              animi odio consequatur praesentium, quis esse nulla dolor
              perferendis neque corrupti fugit ab ad facilis, cupiditate
              mollitia eos vel, ullam rerum.
            </p>
            <div className="flex gap-2 justify-end">
              <FaHtml5 size={32} className="text-brown" />
              <RiNextjsFill size={32} className="text-brown" />
            </div>
          </div>
          <Link href="https://parking-now.vercel.app/" target="_blanck">
            <Image
              src="https://i.pinimg.com/originals/6b/b3/4d/6bb34d037ad77b2097cb9712bf543cd2.jpg"
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
