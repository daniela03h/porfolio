import { NavBarItem } from "./NavBarItems";


const navBarItems = [
  { path: "#skills-about", title: " Acerca de Mí" },
  { path: "#skills-section", title: "Skills" },
  { path: "#projects-section", title: "Proyectos" },
  { path: "#contact-section", title: "Contacto" },
];


export default function NavBarComponent() {
  return (
    <nav className="flex justify-between gap-5">
        {navBarItems.map((item, key) => (
          <NavBarItem path={item.path} title={item.title} key={key} />
        ))}
    </nav>
  );
}
