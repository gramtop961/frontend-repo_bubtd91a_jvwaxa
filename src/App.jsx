import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Built with ❤️ using React and Tailwind CSS</p>
          <a href="#home" className="text-sm font-semibold text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
