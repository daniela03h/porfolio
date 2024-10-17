import Link from "next/link";

export default function Header() {
  return (
      <header className="h-24 flex justify-center font-bold text-xl bg-lightRose">
        <div className="w-1/2 border-2 flex gap-5 justify-center items-center">
          <Link href="#skills-about" className="text-dark">About</Link>
          <Link href="#skills-section" className="text-dark">Skills</Link>
          <Link href="#projects-section" className="text-dark">Projects</Link>
          <Link href="#contact-section" className="text-dark">Contact</Link>
        </div>
      </header>
  );
}
