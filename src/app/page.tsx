import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";
import ProjectSlider from "@/components/ProjectSlider";

import Link from "next/link";
import Titles from "@/components/Util/Titles";

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
          className="w-24 object-contain sm:w-40"
        />
      </div>

      <h2 className="mt-4 text-center [font-family:var(--font-jomhuria)] text-4xl sm:text-5xl lg:text-left lg:text-7xl">
        Hola soy Erwin Martinez
      </h2>

      <div className="w-full">
        <div className="theme-bg-secondary flex min-h-40 flex-col items-center justify-center rounded-lg p-6 sm:h-60 sm:p-10 lg:p-15">
          <p className="theme-text-secondary px-2 text-center text-sm font-semibold sm:px-10 sm:text-base lg:px-52 lg:text-lg">
            Soy un apasionado desarrollador web fullstack con experiencia en
            tecnologías modernas. Me encanta crear aplicaciones web que sean
            funcionales y atractivas. Además, soy una persona comprometida con
            mi trabajo y siempre busco ser creativo en cada proyecto que
            realizo.
          </p>
          <div className="py-3">
            <Link
              className="theme-text-secondary inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
              href="/cv.pdf"
              target="_blank"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descarga mi CV
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-md rounded-2xl bg-gray-200 px-4 py-6 shadow-lg sm:mt-12 sm:max-w-lg lg:mt-16 lg:max-w-6xl lg:px-8">
          <Titles title="Proyectos" />
          <ProjectSlider />
          <hr className="my-10 border-t-2 border-gray-400" />
          <Titles title="Estudios" />
          <p className="px-20 text-center text-lg font-semibold text-gray-700">
            Tsu En Área De Desarrollo Y Software:{" "}
            <span className="text-blue-500">Concluido</span> {""}
          </p>
          <p className="mt-4 px-20 text-center text-lg font-semibold text-gray-700">
            Ingeneria En Area de Desarrollo Y Software Multiplataforma:{" "}
            <span className="text-blue-500">Concluido</span>
          </p>
        </div>
      </div>

      <div className="py-8 sm:py-24 lg:py-14"></div>
    </div>
  );
}
