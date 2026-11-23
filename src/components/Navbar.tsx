import { type MouseEvent, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'projects';
  onStartProject: () => void;
  onNavigateHome: (sectionId?: string) => void;
  onOpenProjects: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
];

export default function Navbar({
  activePage,
  onStartProject,
  onNavigateHome,
  onOpenProjects,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand wordmark */}
        <a
          href="#top"
          onClick={(e) => handleSectionClick(e, 'top')}
          className="font-display text-xl font-semibold tracking-[0.14em] text-[#F5D28A] transition-colors hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0"
        >
          AIMADEIT
        </a>

        {/* Zone 2: Concise single-line navigation links + Projects archive page */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.id)}
              className="relative py-1 text-sm font-medium text-[#B9BEC7] transition-colors duration-200 hover:text-[#F5F1E8] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D99A3E] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProjects();
            }}
            aria-current={activePage === 'projects' ? 'page' : undefined}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#D99A3E] after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer ${
              activePage === 'projects'
                ? 'text-[#F5D28A] after:w-full'
                : 'text-[#B9BEC7] hover:text-[#F5F1E8] after:w-0 hover:after:w-full'
            }`}
          >
            Projects
          </button>
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onStartProject}
            className="hidden min-h-10 items-center justify-center rounded-lg bg-[#D99A3E] px-5 py-2 text-sm font-semibold text-[#090909] transition-colors duration-200 hover:bg-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] md:inline-flex whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Project
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#141414] text-[#F5F1E8] transition-colors hover:border-[#D99A3E]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#090909] px-4 pb-6 pt-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.id)}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-[#F5F1E8] transition-colors hover:bg-[#171717] hover:text-[#F5D28A]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjects();
              }}
              aria-current={activePage === 'projects' ? 'page' : undefined}
              className={`flex min-h-11 items-center rounded-lg px-3 text-left text-base font-medium transition-colors hover:bg-[#171717] cursor-pointer ${
                activePage === 'projects'
                  ? 'bg-[#171717] text-[#F5D28A]'
                  : 'text-[#F5F1E8] hover:text-[#F5D28A]'
              }`}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="mt-3 flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D99A3E] px-5 py-2.5 text-sm font-semibold text-[#090909] transition-colors hover:bg-[#F5D28A] cursor-pointer"
            >
              Start Your Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
