import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <h1 className="text-center [font-family:var(--font-jomhuria)] text-8xl font-normal lg:text-left">
        DESARROLLADOR WEB FULLSTACK
      </h1>

      <div className="flex flex-wrap justify-center gap-2 lg:mx-60">
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

      <div className="relative w-full">
        <div className="theme-bg-secondary h-full rounded-lg p-15 text-center sm:h-60 sm:p-10">
          <p className="theme-text-secondary px-4 text-base font-semibold sm:px-10 sm:text-lg lg:px-52">
            Soy un apasionado desarrollador web fullstack con experiencia en
            tecnologías modernas. Me encanta crear aplicaciones web que sean
            funcionales y atractivas. Además, soy una persona comprometida con
            mi trabajo y siempre busco ser creativo en cada proyecto que
            realizo.
          </p>
        </div>
        <div className="absolute top-full left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-200 px-20 py-6 shadow-lg sm:px-12 md:px-20 lg:px-28 xl:px-96">  
          <h3 className="text-center [font-family:var(--font-jomhuria)] text-4xl text-black sm:text-5xl md:text-6xl">
            PORTAFOLIO
          </h3>
        </div>
      </div>

      <div className="p-20"></div>
    </div>
  );
}
