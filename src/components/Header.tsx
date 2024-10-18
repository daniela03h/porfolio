import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col gap-3 items-center py-4 h-24 font-bold text-xl bg-lightRose md:flex-row md:justify-around">
      <p className="text-3xl">
      &lt;Dani<span className="text-brown">Dev</span>
      </p>
      <div className="flex justify-between gap-5">
        <Link href="#skills-about" className="text-dark">
          Sobre mí
        </Link>
        <Link href="#skills-section" className="text-dark">
          Skills
        </Link>
        <Link href="#projects-section" className="text-dark">
          Proyectos
        </Link>
        <Link href="#contact-section" className="text-dark">
          Contacto
        </Link>
      </div>
    </header>
  );
}
