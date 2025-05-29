export default function page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ background: "var(--bg-primary)" }}
    >
      <section className="relative px-6 py-20 text-center theme-accent">
        <h1 className="mb-6 text-5xl font-bold theme-text">SundownerTech</h1>
        <p className="max-w-2xl mx-auto text-xl theme-text opacity-80">
          Un sitio web que muestra mis habilidades y proyectos como
          desarrollador web fullstack
        </p>
      </section>

      <section className="px-6 py-16 theme-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold theme-text">
            ¿Cómo contribuí en este proyecto?
          </h2>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="p-6 rounded-lg theme-accent theme-shadow">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-bg-secondary">
                <span className="font-bold theme-text-secondary">🎨</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold theme-text">
                Diseño UI/UX
              </h3>
              <p className="theme-text opacity-80">
                Diseñé la interfaz completa utilizando principios de UX y diseño
                moderno
              </p>
            </div>

            <div className="p-6 rounded-lg theme-accent theme-shadow">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-bg-secondary">
                <span className="font-bold theme-text-secondary">⚡</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold theme-text">
                Desarrollo Frontend
              </h3>
              <p className="theme-text opacity-80">
                Implementé con React, Next.js y Tailwind CSS para una
                experiencia fluida
              </p>
            </div>

            <div className="p-6 rounded-lg theme-accent theme-shadow">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-bg-secondary">
                <span className="font-bold theme-text-secondary">🔧</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold theme-text">
                Backend & Deploy
              </h3>
              <p className="theme-text opacity-80">
                Configuré la infraestructura backend y el despliegue
                automatizado
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 theme-accent">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-12 text-3xl font-bold text-center theme-text">
            Mi proceso de desarrollo
          </h3>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-8 h-8 font-bold rounded-full theme-bg-secondary theme-text-secondary">
                1
              </div>
              <div>
                <h4 className="mb-2 text-xl font-semibold theme-text">
                  Análisis y Planificación
                </h4>
                <p className="theme-text opacity-80">
                  Definí los requisitos del proyecto y creé wireframes
                  iniciales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-8 h-8 font-bold rounded-full theme-bg-secondary theme-text-secondary">
                2
              </div>
              <div>
                <h4 className="mb-2 text-xl font-semibold theme-text">
                  Desarrollo Iterativo
                </h4>
                <p className="theme-text opacity-80">
                  Implementé las funcionalidades por módulos utilizando
                  metodología ágil.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-8 h-8 font-bold rounded-full theme-bg-secondary theme-text-secondary">
                3
              </div>
              <div>
                <h4 className="mb-2 text-xl font-semibold theme-text">
                  Testing y Optimización
                </h4>
                <p className="theme-text opacity-80">
                  Realicé pruebas exhaustivas y optimicé el rendimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center theme-bg-secondary">
        <h3 className="mb-6 text-3xl font-bold theme-text-secondary">
          Explora el código
        </h3>
        <p className="max-w-2xl mx-auto mb-8 theme-text-secondary opacity-80">
          Todo el código fuente está disponible en GitHub. Puedes revisar la
          implementación, las tecnologías utilizadas y el historial de commits.
        </p>
        <a
          href="https://github.com/SundownerTech/app-sundownertech.git"
          className="inline-flex items-center gap-3 px-8 py-3 font-semibold transition-colors rounded-lg theme-bg theme-text hover:opacity-80"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Ver en GitHub
        </a>
      </section>
    </div>
  );
}
