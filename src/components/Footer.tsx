import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="theme-bg-secondary theme-text-secondary p-6 text-center [font-family:var(--font-jomhuria)] text-3xl">
      <p className="mb-4">Vivir, aprender y subir de nivel un día a la vez.</p>

      <SocialLinks />
      <div className="mt-4 opacity-70">
        <p>&copy; 2025 Erwin Dayan Martínez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
