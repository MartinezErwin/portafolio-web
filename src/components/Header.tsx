import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="theme-bg theme-shadow theme-text flex items-center justify-between p-4">
      <div className="text-xl font-bold">PORTAFOLIO</div>
      <ThemeToggle />
    </header>
  );
}
