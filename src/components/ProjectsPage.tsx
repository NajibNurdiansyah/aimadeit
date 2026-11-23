import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Film,
  Image as ImageIcon,
  Maximize2,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import {
  COMPLETED_PROJECTS,
  CompletedProject,
  PORTFOLIO_FILTERS,
} from '../data/aimadeitData';
import ResilientImage from './ResilientImage';

interface ProjectsPageProps {
  onBackHome: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

type MediaFilter = 'all' | 'image' | 'video';
type SortOption = 'newest' | 'oldest' | 'az';

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | 'ellipsis')[] = [1];
  if (current > 3) pages.push('ellipsis');
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }
  if (current < total - 2) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

export default function ProjectsPage({
  onBackHome,
  onRequestSimilar,
}: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] =
    useState<CompletedProject | null>(null);

  const years = useMemo(() => {
    const unique = Array.from(new Set(COMPLETED_PROJECTS.map((p) => p.year)));
    return unique.sort((a, b) => Number(b) - Number(a));
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COMPLETED_PROJECTS.length };
    for (const p of COMPLETED_PROJECTS) {
      counts[p.filterKey] = (counts[p.filterKey] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = COMPLETED_PROJECTS.filter((project) => {
      if (activeCategory !== 'all' && project.filterKey !== activeCategory) {
        return false;
      }
      if (mediaFilter !== 'all' && project.mediaType !== mediaFilter) {
        return false;
      }
      if (yearFilter !== 'all' && project.year !== yearFilter) {
        return false;
      }
      if (q) {
        const haystack = [
          project.title,
          project.client,
          project.category,
          project.concept,
          project.creativeStyle,
          project.year,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    const sorted = [...list];
    if (sortBy === 'newest') {
      sorted.sort((a, b) => {
        const yearDiff = Number(b.year) - Number(a.year);
        return yearDiff !== 0 ? yearDiff : Number(a.index) - Number(b.index);
      });
    } else if (sortBy === 'oldest') {
      sorted.sort((a, b) => {
        const yearDiff = Number(a.year) - Number(b.year);
        return yearDiff !== 0 ? yearDiff : Number(b.index) - Number(a.index);
      });
    } else if (sortBy === 'az') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  }, [activeCategory, mediaFilter, yearFilter, sortBy, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage)
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProjects = useMemo(() => {
    const start = (safeCurrentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, safeCurrentPage, itemsPerPage]);

  const startItem =
    filteredProjects.length === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(
    safeCurrentPage * itemsPerPage,
    filteredProjects.length
  );

  const hasActiveFilters =
    activeCategory !== 'all' ||
    mediaFilter !== 'all' ||
    yearFilter !== 'all' ||
    searchQuery.trim() !== '';

  const resetFilters = () => {
    setActiveCategory('all');
    setMediaFilter('all');
    setYearFilter('all');
    setSortBy('newest');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    const clamped = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(clamped);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, mediaFilter, yearFilter, sortBy, searchQuery, itemsPerPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const pageNumbers = getPageNumbers(safeCurrentPage, totalPages);

  return (
    <section
      aria-label="Completed Projects Archive"
      className="border-b border-white/10 bg-[#090909] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Back Action & Header */}
        <div>
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#141414] px-3.5 py-2 text-xs font-medium text-[#B9BEC7] transition-colors hover:border-[#D99A3E]/60 hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="mt-6 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
                Completed Projects Archive
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-5xl">
                Projects We’ve Built.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7] sm:text-base">
                Browse our complete catalog of AI-generated commercial films,
                product campaigns, virtual ambassadors, fashion editorials, and
                social media production systems.
              </p>
            </div>

            <div className="flex items-center gap-6 rounded-xl border border-white/10 bg-[#141414] px-5 py-3.5 shrink-0">
              <div>
                <p className="font-mono text-2xl font-semibold text-[#F5D28A] tabular-nums">
                  {COMPLETED_PROJECTS.length}
                </p>
                <p className="text-xs text-[#B9BEC7]">Completed Projects</p>
              </div>
              <div className="h-8 w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="font-mono text-2xl font-semibold text-[#00E5F2] tabular-nums">
                  {totalPages}
                </p>
                <p className="text-xs text-[#B9BEC7]">Archive Pages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = activeCategory === filter.id;
            const count = categoryCounts[filter.id] || 0;
            return (
              <button
                key={filter.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(filter.id)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#D99A3E] text-[#090909]'
                    : 'border border-white/10 bg-[#141414] text-[#B9BEC7] hover:border-white/25 hover:text-[#F5F1E8]'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-[#090909]/80' : 'text-[#B9BEC7]/70'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search, Format, Year, Sort & Per-Page Controls */}
        <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-[#141414] p-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Search Input */}
          <div className="relative lg:col-span-4">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B9BEC7]/60"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, client, or style..."
              aria-label="Search completed projects"
              className="h-10 w-full rounded-lg border border-white/15 bg-[#090909] pl-10 pr-9 text-xs text-[#F5F1E8] placeholder:text-[#B9BEC7]/45 focus:border-[#00E5F2] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#B9BEC7] hover:text-[#F5F1E8] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Media Format Filter */}
          <div className="lg:col-span-2">
            <select
              aria-label="Filter by format"
              value={mediaFilter}
              onChange={(e) => setMediaFilter(e.target.value as MediaFilter)}
              className="h-10 w-full rounded-lg border border-white/15 bg-[#090909] px-3 text-xs text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
            >
              <option value="all">All Formats</option>
              <option value="image">Images Only</option>
              <option value="video">Video & Motion</option>
            </select>
          </div>

          {/* Year Filter */}
          <div className="lg:col-span-2">
            <select
              aria-label="Filter by year"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="h-10 w-full rounded-lg border border-white/15 bg-[#090909] px-3 text-xs text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
            >
              <option value="all">All Years</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  Year {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Order */}
          <div className="lg:col-span-2">
            <select
              aria-label="Sort projects"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-10 w-full rounded-lg border border-white/15 bg-[#090909] px-3 text-xs text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
              <option value="az">Sort: Title A–Z</option>
            </select>
          </div>

          {/* Items Per Page */}
          <div className="lg:col-span-2">
            <select
              aria-label="Projects per page"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="h-10 w-full rounded-lg border border-white/15 bg-[#090909] px-3 text-xs text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
            >
              <option value={6}>6 per page</option>
              <option value={9}>9 per page</option>
              <option value={12}>12 per page</option>
            </select>
          </div>
        </div>

        {/* Live Result Summary + Reset */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs text-[#B9BEC7]">
          <p className="tabular-nums">
            Showing{' '}
            <span className="font-mono font-semibold text-[#F5F1E8]">
              {startItem}–{endItem}
            </span>{' '}
            of{' '}
            <span className="font-mono font-semibold text-[#F5D28A]">
              {filteredProjects.length}
            </span>{' '}
            projects · Page{' '}
            <span className="font-mono text-[#F5F1E8]">
              {safeCurrentPage} / {totalPages}
            </span>
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#00E5F2] transition-colors hover:text-[#F5F1E8] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Paginated Projects Grid */}
        {paginatedProjects.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#141414] px-6 py-16 text-center">
            <p className="font-display text-xl font-semibold text-[#F5F1E8]">
              No matching projects found
            </p>
            <p className="mt-2 max-w-md text-sm text-[#B9BEC7]">
              Try adjusting your category, format, year, or search keywords to
              explore more completed productions.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#D99A3E] px-5 py-2 text-xs font-semibold text-[#090909] transition-colors hover:bg-[#F5D28A] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Show All Projects</span>
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-colors duration-200 hover:border-[#D99A3E]/50"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.title} details`}
                  className="relative block w-full overflow-hidden bg-[#090909] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <ResilientImage
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909]/85 via-transparent to-transparent"
                  />

                  <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#090909]/80 px-2.5 py-1 text-[11px] font-medium text-[#F5F1E8] backdrop-blur-sm">
                    {project.mediaType === 'video' ? (
                      <Film
                        className="h-3 w-3 text-[#00E5F2]"
                        aria-hidden="true"
                      />
                    ) : (
                      <ImageIcon
                        className="h-3 w-3 text-[#F5D28A]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="capitalize">{project.mediaType}</span>
                  </span>

                  <span className="absolute right-3.5 top-3.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#090909]/80 text-[#F5F1E8] opacity-80 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B9BEC7]">
                      <span className="font-mono text-[#D99A3E] tabular-nums">
                        #{project.index}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span className="font-mono tabular-nums">
                        {project.year}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.client}</span>
                    </div>

                    <h2 className="mt-2 font-display text-lg font-semibold text-[#F5F1E8]">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-[#00E5F2]/90">
                      {project.category}
                    </p>

                    <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[#B9BEC7]">
                      {project.concept}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="truncate text-xs text-[#F5D28A]/90">
                      {project.creativeStyle}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#00E5F2] transition-colors hover:text-[#F5F1E8] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Brief</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Per-Page Pagination Bar */}
        {totalPages > 1 && (
          <nav
            aria-label="Projects Pagination"
            className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"
          >
            <p className="text-xs text-[#B9BEC7] tabular-nums">
              Page{' '}
              <span className="font-mono font-semibold text-[#F5F1E8]">
                {safeCurrentPage}
              </span>{' '}
              of{' '}
              <span className="font-mono font-semibold text-[#F5F1E8]">
                {totalPages}
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/15 bg-[#141414] px-3.5 text-xs font-semibold text-[#F5F1E8] transition-colors hover:border-[#D99A3E]/60 hover:text-[#F5D28A] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                <span>Prev</span>
              </button>

              {pageNumbers.map((item, idx) =>
                item === 'ellipsis' ? (
                  <span
                    key={`ellipsis-${idx}`}
                    className="inline-flex h-10 w-8 items-center justify-center font-mono text-xs text-[#B9BEC7]/60"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    aria-current={item === safeCurrentPage ? 'page' : undefined}
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 font-mono text-xs font-semibold tabular-nums transition-colors cursor-pointer ${
                      item === safeCurrentPage
                        ? 'bg-[#D99A3E] text-[#090909]'
                        : 'border border-white/10 bg-[#141414] text-[#B9BEC7] hover:border-white/25 hover:text-[#F5F1E8]'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/15 bg-[#141414] px-3.5 text-xs font-semibold text-[#F5F1E8] transition-colors hover:border-[#D99A3E]/60 hover:text-[#F5D28A] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]/92 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#090909]/85 text-[#F5F1E8] transition-colors hover:border-[#D99A3E] hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="flex items-center justify-center bg-[#090909] p-4 lg:col-span-7">
                {selectedProject.embedUrl ? (
                  <div className="aspect-[9/16] max-h-[520px] w-full max-w-[520px] overflow-hidden rounded-xl">
                    <iframe
                      src={selectedProject.embedUrl}
                      title={selectedProject.title}
                      className="h-full w-full border-0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="flex max-h-[540px] w-full items-center justify-center overflow-hidden rounded-xl">
                    <ResilientImage
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-h-[540px] w-auto object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#B9BEC7]">
                    <span className="font-mono text-[#D99A3E] tabular-nums">
                      Project #{selectedProject.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">
                      {selectedProject.year}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.client}</span>
                  </div>

                  <h3
                    id="project-modal-title"
                    className="mt-2 font-display text-2xl font-semibold text-[#F5F1E8]"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#00E5F2]">
                    {selectedProject.category}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#B9BEC7]">
                    {selectedProject.concept}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h4 className="text-xs font-semibold tracking-wider text-[#F5D28A] uppercase">
                      Project Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-[#F5F1E8]/90">
                      {selectedProject.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00E5F2]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs text-[#B9BEC7]">
                      Creative Style:{' '}
                      <span className="text-[#F5F1E8]">
                        {selectedProject.creativeStyle}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onRequestSimilar(title);
                    }}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D99A3E] px-5 py-2.5 text-sm font-semibold text-[#090909] transition-colors hover:bg-[#F5D28A] cursor-pointer"
                  >
                    Request Similar Concept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
