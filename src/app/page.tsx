import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 sm:px-8">
      <h1 className="text-center [font-family:var(--font-jomhuria)] text-5xl font-normal sm:text-6xl lg:text-8xl lg:text-left">
        DESARROLLADOR WEB FULLSTACK
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mx-4 sm:mx-8 lg:mx-60">
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
              className="w-4 h-4"
            />
            #{tech.name}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6 overflow-hidden rounded-full theme-bg-secondary h-32 w-32 sm:h-52 sm:w-52">
        <Image
          src="/perfil.png"
          alt="Perfil de Erwin"
          width={100}
          height={100}
          priority
          className="object-cover w-24 sm:w-40"
        />
      </div>

      <h2 className="mt-4 text-center [font-family:var(--font-jomhuria)] text-4xl sm:text-5xl lg:text-7xl lg:text-left">
        Hola soy Erwin Martinez
      </h2>

      <div className="relative w-full">
        <div className="text-center rounded-lg theme-bg-secondary p-6 sm:p-10 lg:p-15 min-h-40 sm:h-60">
          <p className="px-2 text-sm font-semibold theme-text-secondary sm:px-10 sm:text-base lg:text-lg lg:px-52">
            Soy un apasionado desarrollador web fullstack con experiencia en
            tecnologías modernas. Me encanta crear aplicaciones web que sean
            funcionales y atractivas. Además, soy una persona comprometida con
            mi trabajo y siempre busco ser creativo en cada proyecto que
            realizo.
          </p>
        </div>
        <div className="absolute z-10 px-4 py-6 mt-20 -translate-x-1/2 -translate-y-1/2 bg-gray-200 shadow-lg top-full left-1/2 rounded-2xl w-[90vw] max-w-md sm:w-80 sm:mt-32 lg:mt-52 lg:w-full lg:max-w-6xl lg:px-8">
          <h3 className="mb-4 text-center [font-family:var(--font-jomhuria)] text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl lg:mb-6">
            PORTAFOLIO
          </h3>
          <ProjectSlider />
        </div>
      </div>

      <div className="h-32 sm:h-40 lg:h-80"></div>
    </div>
  );
}
