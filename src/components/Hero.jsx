import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="relative h-[560px] w-full rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60">
        <Spline
          scene="https://prod.spline.design/6m9e9mI5V2K9gQbX/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-10 md:px-16 max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 backdrop-blur">
              Available for freelance and full-time roles
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
              I craft delightful web experiences with React, TypeScript, and modern UI thinking. Here are a few projects I’ve built and the things I’m exploring.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                View my work <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
