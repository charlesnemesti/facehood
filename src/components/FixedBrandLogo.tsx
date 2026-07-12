export function FixedBrandLogo() {
  return (
    <a
      href="/"
      aria-label="Facehood home"
      className="fixed bottom-5 left-5 z-50 block transition-transform hover:scale-105"
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <rect width="56" height="56" rx="14" fill="#d1ff00" />
        <path
          fill="#000000"
          d="M38.2 29.4h-4.9V46h-8.1V29.4h-3.4v-6.5h3.4v-3.8c0-5.4 3.2-8.3 8.1-8.3h6.5v7.1h-4.7c-2.2 0-2.9 1.4-2.9 2.8v3.2h6.1l-.7 6.5z"
        />
      </svg>
    </a>
  );
}
