import NavBarComponent from "./NavBarComponent";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 shadow z-50 w-full flex flex-col gap-3 items-center py-4 h-24 font-bold text-xl bg-lightRose md:flex-row md:justify-around">
      <p className="text-3xl">
      &lt;Dani<span className="text-brown">Dev</span>
      </p>
      <NavBarComponent/>
    </header>
  );
}
