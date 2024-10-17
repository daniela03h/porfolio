import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <section id="skills-about" className="p-2 border-2 flex flex-col gap-5">
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl text-dark font-semibold">
              Hola, Soy Daniela
            </h1>
            <h2 className="text-xl text-darkRose font-bold">
              Desarrolladora Front-End
            </h2>
            <p className="text-base text-brown">
              Apasionada por crear experiencias de usuario atractivas y
              funcionales, mi enfoque colaborativo y proactivo me ha permitido
              trabajar estrechamente con las personas.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.linkedin.com/in/daniela0393h/"
                target="_blanck"
              >
                <FaLinkedin size={36} className="text-brown" />
              </Link>
              <Link href="https://github.com/daniela03h/" target="_blanck">
                <FaGithub size={36} className="text-brown" />
              </Link>
              <Link href="https://web.whatsapp.com/+573162777170" target="_blanck">
                <FaWhatsapp size={36} className="text-brown" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQGTjj2-GAJJbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724238750922?e=1734566400&v=beta&t=rxN0QONkXfHEvGynE5giCIPsURB0IGSHmAr8uNnbvhg"
            alt="img"
            width={500}
            height={300}
            className="rounded-full"
          ></Image>
        </div>

        <section id="skills-section">
          <Skills />
        </section>

        <section id="projects-section">
          <Projects />
        </section>

        <section id="contact-section">
          <Contact />
        </section>
      </section>
    </>
  );
}
