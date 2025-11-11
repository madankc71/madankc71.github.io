import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  // { label: "Publications", href: "#publications" },
    { label: "Industry", href: "#industry" },
    { label: "Projects", href: "#projects" },
    { label: "Volunteering", href: "#volunteering" },
      { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];
  const [active, setActive] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace('#', ''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    // Observe sections and set active when a section is visible.
    const obs = new IntersectionObserver(
      (entries: any) => {
        // Pick the entry with largest intersectionRatio
        let best: any = null;
        entries.forEach((entry: any) => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        });
        if (best && best.isIntersecting) setActive((best.target as HTMLElement).id);
      },
      { root: null, rootMargin: '-20% 0px -40% 0px', threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      {/* Top bar: name and small contact */}
      {/* <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold text-primary">Madan K C</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            <a href="mailto:madankc71@gmail.com" className="text-muted hover:text-primary">madankc71@gmail.com</a>
            <a href="/assets/Resume_Madan_KC.pdf" className="text-muted hover:text-primary">Resume (PDF)</a>
          </div>
        </div>
      </div> */}

      {/* Menu bar: colored and distinct */}
      <div className="bg-blue-600 shadow">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-end">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu (horizontal) - hidden on mobile */}
          <ul className="hidden md:flex gap-6 items-center ml-auto">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-medium px-3 py-2 rounded-md transition-colors duration-150 text-sm sm:text-base text-white ${isActive ? 'bg-white/20 shadow-sm' : 'hover:bg-white/15'}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu (dropdown) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <ul className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = active === id;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block font-medium px-4 py-3 rounded-md transition-colors duration-150 text-white ${isActive ? 'bg-white/20 shadow-sm' : 'hover:bg-white/15'}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
