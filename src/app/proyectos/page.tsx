import { Proyectos } from "@/data/Proyectos";
import Image from "next/image";
import Link from "next/link";

export default function SundownertechProyecto() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 py-4 sm:px-8">
      <div className="text-center">
        <h1 className="text-center [font-family:var(--font-jomhuria)] text-5xl font-normal sm:text-6xl lg:text-8xl">
          MIS PROYECTOS
        </h1>
        <p className="text-lg text-gray-600">
          Aquí puedes ver algunos de los proyectos más destacados que he
          desarrollado.
        </p>
      </div>
      <div className="flex-wrap gap-10 lg:flex lg:justify-center">
        {Proyectos.map((proyecto) => (
          <div key={proyecto.id}>
            <div className="project-card mx-auto flex h-full min-h-[400px] max-w-md flex-col items-center justify-center rounded-xl p-6 shadow-lg">
              <Image
                src={proyecto.image}
                alt={proyecto.title}
                width={300}
                height={200}
                className="mb-4 h-48 w-full rounded-lg object-cover shadow-md"
              />
              <div className="w-full flex-1">
                <h4 className="project-title mb-2 text-center text-xl font-semibold">
                  {proyecto.title}
                </h4>
                <p className="project-description mb-4 text-center text-sm">
                  {proyecto.description}
                </p>
              </div>
              <div className="flex w-full gap-2">
                <Link
                  href={proyecto.link}
                  target="_blank"
                  className="btn-primary flex-1 rounded-lg px-4 py-2 text-center font-medium transition-all duration-200"
                >
                  Ver
                </Link>
                <Link
                  href={proyecto.detailPage}
                  className="btn-secondary flex-1 rounded-lg px-4 py-2 text-center font-medium transition-all duration-200"
                >
                  Conocer Más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
