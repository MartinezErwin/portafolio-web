import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="theme-bg text-primary p-6 text-center [font-family:var(--font-jomhuria)] text-3xl">
      <hr className="w-full my-4 border-t-2 border-gray-300" />
      <p className="mb-4">Vivir, aprender y subir de nivel un día a la vez.</p>

      <SocialLinks />
      <div className="mt-4 opacity-70">
        <p>&copy; 2025 Erwin Dayan Martínez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
