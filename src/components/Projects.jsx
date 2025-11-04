import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Design System Kit',
    description: 'A reusable, themeable UI kit built with Tailwind CSS and Radix primitives.',
    tags: ['Tailwind', 'Radix UI', 'Accessibility'],
    live: 'https://example.com',
    repo: 'https://github.com',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Realtime Chat',
    description: 'A fast, secure chat app with websockets, optimistic UI and message reactions.',
    tags: ['React', 'WebSocket', 'Express'],
    live: 'https://example.com',
    repo: 'https://github.com',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Image Playground',
    description: 'Generate, upscale and remix images with a fun, tactile interface.',
    tags: ['AI', 'Next.js', 'Edge'],
    live: 'https://example.com',
    repo: 'https://github.com',
    image:
      'https://images.unsplash.com/photo-1551281044-8a6b86fdde1b?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden bg-white dark:bg-neutral-900">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <ExternalLink size={14} /> Live
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <Code size={14} /> Code
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-8 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A selection of things I loved building recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-500">Work with me →</a>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
