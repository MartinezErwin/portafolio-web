import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";
import ProjectSlider from "@/components/ProjectSlider";

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
            className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full theme-bg-secondary theme-text-secondary"
          >
            <Image
              width={4}
              height={4}
              src={tech.icon}
              alt={tech.alt}
              className="w-4 h-4 objec"
            />
            #{tech.name}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6 overflow-hidden rounded-full theme-bg-secondary h-52 w-52">
        <Image
          src="/perfil.png"
          alt="Perfil de Erwin"
          width={100}
          height={100}
          priority
          className="object-cover w-40"
        />
      </div>

      <h2 className="mt-4 text-center [font-family:var(--font-jomhuria)] text-7xl lg:text-left">
        Hola soy Erwin Martinez
      </h2>

      <div className="relative w-full">
        <div className="h-full text-center rounded-lg theme-bg-secondary p-15 sm:h-60 sm:p-10">
          <p className="px-4 text-base font-semibold theme-text-secondary sm:px-10 sm:text-lg lg:px-52">
            Soy un apasionado desarrollador web fullstack con experiencia en
            tecnologías modernas. Me encanta crear aplicaciones web que sean
            funcionales y atractivas. Además, soy una persona comprometida con
            mi trabajo y siempre busco ser creativo en cada proyecto que
            realizo.
          </p>
        </div>
        <div className="absolute z-10 max-w-6xl px-5 py-6 mt-64 -translate-x-1/2 -translate-y-1/2 bg-gray-200 shadow-lg top-full left-1/2 w-72 rounded-2xl lg:mt-52 lg:w-full">
          <h3 className="mb-6 text-center [font-family:var(--font-jomhuria)] text-4xl text-black sm:text-5xl md:text-6xl">
            PORTAFOLIO
          </h3>
          <ProjectSlider />
        </div>
      </div>

      <div className="p-70"></div>
    </div>
  );
}
