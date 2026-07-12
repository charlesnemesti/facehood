import { BrandIcon } from "./BrandIcon";

export function FixedBrandLogo() {
  return (
    <a
      href="/"
      aria-label="Facehood home"
      className="fixed bottom-5 left-5 z-50 block transition-transform hover:scale-105"
    >
      <BrandIcon size={56} className="drop-shadow-lg" />
    </a>
  );
}
