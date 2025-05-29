export default function Titles({ title }: { title: string }) {
  return (
    <h3 className="mb-4 text-center [font-family:var(--font-jomhuria)] text-4xl text-black sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
      {title}
    </h3>
  );
}
