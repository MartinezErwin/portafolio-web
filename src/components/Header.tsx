import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 text-black shadow-md">
      <h3 className="text-3xl font-bold tracking-tight">Portafolio</h3>
      <nav className="flex gap-6 text-lg font-medium">
        <Link href="#inicio" className="transition hover:text-blue-500">
          Inicio
        </Link>
        <Link href="#proyectos" className="transition hover:text-blue-500">
          Proyectos
        </Link>
        <Link href="#contacto" className="transition hover:text-blue-500">
          Contacto
        </Link>
      </nav>
    </header>
  );
}
