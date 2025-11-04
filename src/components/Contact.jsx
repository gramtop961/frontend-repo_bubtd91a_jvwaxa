import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something great</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          I’m open to freelance projects, full-time roles, or just a friendly chat. Drop me a line and I’ll get back soon.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500"
          >
            <Mail size={18} /> Email me
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
        <p className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
