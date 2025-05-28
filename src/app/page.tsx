import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 sm:px-8">
      <h1 className="text-center [font-family:var(--font-jomhuria)] text-5xl font-normal sm:text-6xl lg:text-left lg:text-8xl">
        DESARROLLADOR WEB FULLSTACK
      </h1>

      <div className="mx-4 flex flex-wrap justify-center gap-2 sm:mx-8 lg:mx-60">
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

      <div className="theme-bg-secondary mt-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full sm:h-52 sm:w-52">
        <Image
          src="/perfil.png"
          alt="Perfil de Erwin"
          width={100}
          height={100}
          priority
          className="w-24 object-cover sm:w-40"
        />
      </div>

      <h2 className="mt-4 text-center [font-family:var(--font-jomhuria)] text-4xl sm:text-5xl lg:text-left lg:text-7xl">
        Hola soy Erwin Martinez
      </h2>

      <div className="relative w-full">
        <div className="theme-bg-secondary min-h-40 rounded-lg p-6 text-center sm:h-60 sm:p-10 lg:p-15">
          <p className="theme-text-secondary px-2 text-sm font-semibold sm:px-10 sm:text-base lg:px-52 lg:text-lg">
            Soy un apasionado desarrollador web fullstack con experiencia en
            tecnologías modernas. Me encanta crear aplicaciones web que sean
            funcionales y atractivas. Además, soy una persona comprometida con
            mi trabajo y siempre busco ser creativo en cada proyecto que
            realizo.
          </p>
        </div>
        <div className="absolute top-full left-1/2 z-10 mt-20 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-200 px-4 py-6 shadow-lg sm:mt-32 sm:w-80 lg:mt-60 lg:w-full lg:max-w-6xl lg:px-8">
          <h3 className="mb-4 text-center [font-family:var(--font-jomhuria)] text-3xl text-black sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
            PORTAFOLIO
          </h3>
          <ProjectSlider />
        </div>
      </div>

      <div className="p-72"></div>
    </div>
  );
}
