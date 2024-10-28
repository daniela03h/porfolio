import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutPage() {
  return (
    <div>
      <section
        id="about-section"
        className="container mx-auto px-4 pt-40 items-center md:flex md:justify-around"
      >
        <div className="container flex flex-col gap-4 md:w-1/2">
          <h1 className="text-8xl text-dark font-semibold pt-9">
            Hola, Soy Daniela
          </h1>
          <h2 className="text-3xl text-darkRose font-bold md:text-2xl">
            Desarrolladora Front-End
          </h2>
          <p className="text-base text-brown text-justify pb-5 md:text-xl">
            Apasionada por crear experiencias de usuario atractivas y
            funcionales, mi enfoque colaborativo y proactivo me ha permitido
            trabajar estrechamente con las personas.
          </p>
          <div className="flex flex-row gap-4 pb-5">
            <Link
              href="https://www.linkedin.com/in/daniela0393h/"
              target="_blanck"
            >
              <FaLinkedin size={36} className="text-brown" />
            </Link>
            <Link href="https://github.com/daniela03h/" target="_blanck">
              <FaGithub size={36} className="text-brown" />
            </Link>
            <Link
              href="https://wa.me/+573162777179?text='Hola Daniela'"
              target="_blanck"
            >
              <FaWhatsapp size={36} className="text-brown" />
            </Link>
            <Link href="mailto:daniela0393h@gmail.com" target="_blanck">
              <MdEmail size={36} className="text-brown" />
            </Link>
          </div>
        </div>

        <div className="mt-9">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQGTjj2-GAJJbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724238750922?e=1734566400&v=beta&t=rxN0QONkXfHEvGynE5giCIPsURB0IGSHmAr8uNnbvhg"
            alt="img"
            width={400}
            height={250}
            className="rounded-full"
          ></Image>
        </div>
      </section>

      <section id="skills-section">
        <Skills />
      </section>

      <section id="projects-section">
        <Projects />
      </section>

      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
}
