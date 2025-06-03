import { Proyectos } from "@/data/Proyectos";
import Image from "next/image";
import Link from "next/link";
import Titles from "@/components/Util/Titles";

export default function SundownertechProyecto() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 py-4 sm:px-8">
      <div className="text-center">
        <Titles title="Mis proyectos" />
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
                className="object-cover w-full h-48 mb-4 rounded-lg shadow-md"
              />
              <div className="flex-1 w-full">
                <h4 className="mb-2 text-xl font-semibold text-center project-title">
                  {proyecto.title}
                </h4>
                <p className="mb-4 text-sm text-center project-description">
                  {proyecto.description}
                </p>
              </div>
              <div className="flex w-full gap-2">
                <Link
                  href={proyecto.link}
                  target="_blank"
                  className="flex-1 px-4 py-2 font-medium text-center transition-all duration-200 rounded-lg btn-primary"
                >
                  Ver
                </Link>
                <Link
                  href={proyecto.detailPage}
                  className="flex-1 px-4 py-2 font-medium text-center transition-all duration-200 rounded-lg btn-secondary"
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
