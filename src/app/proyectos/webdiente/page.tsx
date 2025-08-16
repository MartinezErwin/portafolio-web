export default function WebDienteADiente() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ background: "var(--bg-primary)" }}
    >
      <section className="theme-accent relative px-4 py-12 text-center sm:px-6 sm:py-20">
        <h1 className="theme-text mb-4 text-3xl font-bold sm:mb-6 sm:text-5xl">
          Web Diente a Diente
        </h1>
        <p className="theme-text mx-auto max-w-2xl text-base opacity-80 sm:text-xl">
          Diente a Diente es una plataforma web desarrollada con Next.js que
          conecta pacientes con odontólogos de manera sencilla y segura. Permite
          agendar citas, gestionar perfiles profesionales y acceder a
          información relevante sobre salud dental.
        </p>
      </section>

      <section className="theme-bg px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="theme-text mb-6 text-2xl font-bold sm:mb-8 sm:text-4xl">
            ¿Cómo contribuí en este proyecto?
          </h2>
          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  🦷
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Diseño centrado en el usuario
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Definí la arquitectura visual y la experiencia de usuario para
                facilitar la navegación y el proceso de agendar citas. Utilicé
                Tailwind CSS y componentes reutilizables en Next.js para lograr
                una interfaz moderna y accesible.
              </p>
            </div>
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  ⚡
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Desarrollo con Next.js
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Implementé el frontend y backend con Next.js y TypeScript,
                usando rutas API para la gestión de citas y perfiles. Integré
                autenticación, manejo de estados y SSR para mejorar el
                rendimiento y SEO.
              </p>
            </div>
            <div className="theme-accent theme-shadow rounded-lg p-4 sm:p-6">
              <div className="theme-bg-secondary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12">
                <span className="theme-text-secondary text-sm font-bold sm:text-base">
                  🔒
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">
                Seguridad y despliegue
              </h3>
              <p className="theme-text text-sm opacity-80 sm:text-base">
                Implementé validaciones, protección de datos y despliegue en
                Vercel. Configuré roles para pacientes y odontólogos,
                garantizando privacidad y acceso seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-accent px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="theme-text mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">
            Proceso de desarrollo
          </h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                1
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Análisis y prototipado
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Identifiqué las necesidades de pacientes y odontólogos,
                  diseñando prototipos interactivos y definiendo los flujos
                  principales de la plataforma.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                2
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Desarrollo con Next.js
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Construí la API y el frontend usando Next.js y TypeScript,
                  aplicando SSR y rutas protegidas. Realicé pruebas y mejoras
                  continuas, integrando notificaciones y validaciones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="theme-bg-secondary theme-text-secondary flex h-7 w-7 items-center justify-center rounded-full font-bold sm:h-8 sm:w-8">
                3
              </div>
              <div className="flex-1">
                <h4 className="theme-text mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                  Lanzamiento y feedback
                </h4>
                <p className="theme-text text-sm opacity-80 sm:text-base">
                  Desplegué la plataforma en Vercel y recopilé retroalimentación
                  de usuarios reales, ajustando funcionalidades y mejorando la
                  seguridad y el rendimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-bg-secondary px-4 py-12 text-center sm:px-6 sm:py-16">
        <h3 className="theme-text-secondary mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Explora el proyecto
        </h3>
        <p className="theme-text-secondary mx-auto mb-6 max-w-2xl text-sm opacity-80 sm:mb-8 sm:text-base">
          Puedes revisar el repositorio para ver el código fuente, la
          arquitectura y las funcionalidades implementadas en Diente a Diente
          con Next.js.
        </p>
        <a
          href="https://github.com/MartinezErwin/web-diente"
          className="theme-bg theme-text inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-semibold transition-colors hover:opacity-80 sm:gap-3 sm:px-8 sm:py-3 sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Ver en GitHub
        </a>
      </section>
    </div>
  );
}
