import { BrandIcon } from "./BrandIcon";
import { FacehoodLogo } from "./Icons";

const footerLinks = [
  { label: "About", href: "https://robinhood.com/us/en/about/" },
  { label: "Robinhood Chain", href: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto" },
  { label: "$HOOD", href: "https://investors.robinhood.com" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Help", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-[#ced0d4] bg-white">
      <div className="mx-auto max-w-[980px] px-4 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[13px] text-[#65676b] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <BrandIcon size={40} />
            <div>
              <FacehoodLogo theme="light" />
              <p className="mt-1 text-[12px] text-[#65676b]">
                The social network for $HOOD on Robinhood Chain
              </p>
            </div>
          </div>

          <p className="text-center text-[12px] text-[#65676b] sm:text-right">
            Facehood © 2026 · Put on the hood · WAGMI
          </p>
        </div>
      </div>
    </footer>
  );
}
