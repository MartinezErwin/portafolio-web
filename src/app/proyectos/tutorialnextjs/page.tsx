export default function TutorialNextjs() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ background: "var(--bg-primary)" }}
    >
      <section className="theme-accent relative px-4 py-12 text-center sm:px-6 sm:py-20">
        <h1 className="theme-text mb-4 text-3xl font-bold sm:mb-6 sm:text-5xl">
          Tutorial Oficial de Next.js
        </h1>
        <p className="theme-text mx-auto max-w-2xl text-base opacity-80 sm:text-xl">
          Realicé el tutorial oficial de Next.js, aprendiendo a construir una
          aplicación web moderna con React, TypeScript y Next.js. El curso cubre
          desde la estructura básica de carpetas hasta la creación de rutas,
          manejo de datos y despliegue.
        </p>
      </section>

      <section className="theme-bg px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="theme-text mb-6 text-2xl font-bold sm:mb-8 sm:text-4xl">
            ¿Qué aprendí en este tutorial?
          </h2>
          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  ⚛️
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Fundamentos de Next.js
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Aprendí sobre la estructura de carpetas, páginas, rutas y cómo
                Next.js facilita el desarrollo de aplicaciones web escalables y
                rápidas.
              </p>
            </div>
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  🛠️
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Integración con React y TypeScript
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Practiqué la integración de componentes React y el uso de
                TypeScript para tipar props y estados, mejorando la
                mantenibilidad del código.
              </p>
            </div>
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  🚀
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Despliegue y buenas prácticas
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Aprendí a desplegar la aplicación en Vercel y a seguir buenas
                prácticas de desarrollo, como el manejo de rutas dinámicas y la
                optimización de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-accent px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="theme-text mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">
            Proceso de aprendizaje
          </h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                1
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Instalación y configuración
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Aprendí a crear un proyecto Next.js desde cero, configurar
                  TypeScript y entender la estructura de archivos y carpetas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                2
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Creación de páginas y rutas
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Implementé páginas estáticas y dinámicas, aprendiendo cómo
                  Next.js maneja el enrutamiento y la generación de contenido.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                3
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Despliegue y optimización
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Aprendí a desplegar la aplicación en Vercel y a optimizar el
                  rendimiento usando las herramientas que ofrece Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-bg-secondary px-4 py-12 text-center sm:px-6 sm:py-16">
        <h3 className="theme-text-secondary mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Explora el tutorial
        </h3>
        <p className="theme-text-secondary mx-auto mb-6 max-w-2xl text-sm opacity-80 sm:mb-8 sm:text-base">
          Puedes revisar el tutorial oficial de Next.js para aprender a crear
          aplicaciones web modernas y escalables.
        </p>
        <a
          href="https://nextjs.org/learn"
          className="theme-bg theme-text inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-semibold transition-colors hover:opacity-80 sm:gap-3 sm:px-8 sm:py-3 sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          Ver tutorial oficial
        </a>
      </section>
    </div>
  );
}
