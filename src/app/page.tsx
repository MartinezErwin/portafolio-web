import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <h1 className="text-center [font-family:var(--font-jomhuria)] text-8xl font-normal lg:text-left">
        DESARROLLADOR WEB FULLSTACK
      </h1>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tecnologias.map((tech) => (
          <span
            key={tech.name}
            className="theme-bg-secondary theme-text-secondary flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold"
          >
            <Image
              width={4}
              height={4}
              src={tech.icon}
              alt={tech.alt}
              className="h-4 w-4"
            />
            #{tech.name}
          </span>
        ))}
      </div>

      <div className="theme-bg-secondary mt-6 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full">
        <Image
          src="/perfil.png"
          alt="Perfil de Erwin"
          width={100}
          height={100}
          priority
          className="w-40 object-cover"
        />
      </div>

      <h2 className="mt-4 text-center [font-family:var(--font-jomhuria)] text-7xl lg:text-left">
        Hola soy Erwin Martinez
      </h2>

      <div className="theme-bg-secondary mt-6 w-full rounded-lg p-10">
        <p className="theme-text-secondary px-5 text-center text-lg font-semibold lg:px-20">
          Soy un apasionado desarrollador web fullstack con experiencia en
          tecnologías modernas. Me encanta crear aplicaciones web que sean
          funcionales y atractivas. Además, soy una persona comprometida con mi
          trabajo y siempre busco ser creativo en cada proyecto que realizo.
        </p>
      </div>
    </div>
  );
}
