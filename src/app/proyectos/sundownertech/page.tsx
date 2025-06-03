export default function page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ background: "var(--bg-primary)" }}
    >
      <section className="relative px-4 py-12 text-center theme-accent sm:px-6 sm:py-20">
        <h1 className="mb-4 text-3xl font-bold theme-text sm:mb-6 sm:text-5xl">
          SundownerTech
        </h1>
        <p className="max-w-2xl mx-auto text-base theme-text opacity-80 sm:text-xl">
          Sitio web administrable para SundownerTech: Empresa de instalaciones
          de cámaras de seguridad y GPS. Implementé todo el frontend y backend
          para gestionar clientes, proyectos e instalaciones.
        </p>
      </section>

      <section className="px-4 py-12 theme-bg sm:px-6 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold theme-text sm:mb-8 sm:text-4xl">
            ¿Cómo contribuí en este proyecto?
          </h2>

          <div className="grid gap-6 mt-8 sm:mt-12 sm:gap-8 md:grid-cols-3">
            <div className="p-4 rounded-lg theme-accent theme-shadow sm:p-6">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-lg theme-bg-secondary sm:mb-4 sm:h-12 sm:w-12">
                <span className="text-sm font-bold theme-text-secondary sm:text-base">
                  🎨
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold theme-text sm:mb-3 sm:text-xl">
                Diseño UI/UX
              </h3>
              <p className="text-sm theme-text opacity-80 sm:text-base">
                Definí el flujo de navegación para que los usuarios puedan
                conocer servicios, ver casos de éxito y solicitar cotizaciones.
                Creé una interfaz limpia y profesional con Tailwind CSS, basada
                en la identidad visual de SundownerTech.
              </p>
            </div>

            <div className="p-4 rounded-lg theme-accent theme-shadow sm:p-6">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-lg theme-bg-secondary sm:mb-4 sm:h-12 sm:w-12">
                <span className="text-sm font-bold theme-text-secondary sm:text-base">
                  ⚡
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold theme-text sm:mb-3 sm:text-xl">
                Desarrollo Frontend
              </h3>
              <p className="text-sm theme-text opacity-80 sm:text-base">
                Implementé todas las vistas en React + Inertia.js, incluyendo:
                <br />
                • Página de inicio con slider de proyectos.
                <br />
                • Sección de Productos, Servicios, Colecciones, Contacto, Acerca
                de y blog.
                <br />• Formulario de contacto y solicitud de cotización en
                tiempo real.
                <br />• Blog administrable con Filament.
              </p>
            </div>

            <div className="p-4 rounded-lg theme-accent theme-shadow sm:p-6">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-lg theme-bg-secondary sm:mb-4 sm:h-12 sm:w-12">
                <span className="text-sm font-bold theme-text-secondary sm:text-base">
                  🔧
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold theme-text sm:mb-3 sm:text-xl">
                Backend & Deploy
              </h3>
              <p className="text-sm theme-text opacity-80 sm:text-base">
                Construí el backend con Laravel 10 y Filament para:
                <br />
                • Gestión de clientes y proyectos.
                <br />
                • CRUD de instalaciones para subir productos, camaras, gps.
                <br />• Administración de usuarios con permisos (técnicos,
                administrador).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 theme-accent sm:px-6 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-8 text-2xl font-bold text-center theme-text sm:mb-12 sm:text-3xl">
            Mi proceso de desarrollo
          </h3>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex items-center justify-center font-bold rounded-full theme-bg-secondary theme-text-secondary h-7 w-7 sm:h-8 sm:w-8">
                1
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-lg font-semibold theme-text sm:mb-2 sm:text-xl">
                  Análisis y Planificación
                </h4>
                <p className="text-sm theme-text opacity-80 sm:text-base">
                  Reuní requisitos con el cliente (SundownerTech): mapeé
                  servicios (cámaras, GPS), roles (administrador, técnico),
                  flujos de cotización y seguimiento de instalaciones. Esbocé
                  wireframes en Figma para validar estructura y navegación.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex items-center justify-center font-bold rounded-full theme-bg-secondary theme-text-secondary h-7 w-7 sm:h-8 sm:w-8">
                2
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-lg font-semibold theme-text sm:mb-2 sm:text-xl">
                  Desarrollo Iterativo
                </h4>
                <p className="text-sm theme-text opacity-80 sm:text-base">
                  Creé el backend en Laravel 10 con Filament Resources para
                  CRUDs de clientes, proyectos e instalaciones. Después construí
                  cada vista en React + Inertia.js, probando constantemente
                  validaciones, componentes reutilizables y la integración con
                  la API.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex items-center justify-center font-bold rounded-full theme-bg-secondary theme-text-secondary h-7 w-7 sm:h-8 sm:w-8">
                3
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-lg font-semibold theme-text sm:mb-2 sm:text-xl">
                  Testing y Optimización
                </h4>
                <p className="text-sm theme-text opacity-80 sm:text-base">
                  Realicé pruebas funcionales (formularios de cotización) y
                  corregí errores de validación. Optimicé consultas Eloquent y
                  configuré jobs para manejar notificaciones por email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-center theme-bg-secondary sm:px-6 sm:py-16">
        <h3 className="mb-4 text-2xl font-bold theme-text-secondary sm:mb-6 sm:text-3xl">
          Explora el código
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-sm theme-text-secondary opacity-80 sm:mb-8 sm:text-base">
          Todo el código fuente de la web administrable de SundownerTech está
          disponible en GitHub.
        </p>
        <a
          href="https://github.com/SundownerTech/app-sundownertech"
          className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold transition-colors rounded-lg theme-bg theme-text hover:opacity-80 sm:gap-3 sm:px-8 sm:py-3 sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-5 h-5 sm:h-6 sm:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Ver en GitHub
        </a>
      </section>
    </div>
  );
}
