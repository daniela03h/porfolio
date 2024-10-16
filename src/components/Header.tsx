export default function Header() {
  return (
      <header className="h-24 flex justify-center font-bold text-xl bg-lightRose">
        <div className="w-1/2 border-2 flex gap-5 justify-center items-center">
          <a href="" className="text-dark">About</a>
          <a href="" className="text-dark">Projects</a>
          <a href="" className="text-dark">Contact</a>
        </div>
      </header>
  );
}
