import Logo from "../brand/logo";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#templates" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

function ArrowUpIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#top"
              aria-label="SajiloBuild home"
              className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
            >
              <Logo />
            </a>

            <p className="mt-5 text-sm font-medium text-slate-700">
              Build anything. Just describe it.
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              SajiloBuild is being built to make software creation
              easier to approach — from the first idea to a working
              product.
            </p>

            <a
              href="#prompt-builder"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
            >
              Start building

              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Product */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Product
            </h2>

            <ul className="mt-5 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Company
            </h2>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Legal
            </h2>

            <ul className="mt-5 space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-slate-100 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} SajiloBuild. All rights
              reserved.
            </p>

            <p className="text-xs text-slate-400">
              AI-powered software building.
            </p>
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center self-start rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:self-auto"
          >
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;