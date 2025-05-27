import Image from "next/image";
import { tecnologias } from "@/data/Tecnologias";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden bg-white px-8 py-2 text-black">
      <h1 className="text-center [font-family:var(--font-jomhuria)] text-8xl font-normal">
        DESARROLLADOR WEB FULLSTACK
      </h1>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tecnologias.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-2 rounded-full bg-black px-3 py-1 text-sm font-semibold text-white"
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
      <div className="mt-6 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-black">
        <Image
          src="/perfil.png"
          alt="Perfil de Erwin"
          width={100}
          height={100}
          priority
          className="w-40 object-cover"
        />
      </div>

      <h2 className="[font-family:var(--font-jomhuria)] text-7xl">
        Hola soy Erwin
      </h2>
    </main>
  );
}
