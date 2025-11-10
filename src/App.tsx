import './App.css';
// import components
import Hero from './components/Hero';
import Navbar from './Layouts/Navbar';
import Skills from './components/Skills';
import Service from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useEffect } from 'react';
// Animation package
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 100,
      disable: 'mobile',
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="bg-white/80 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
        <div className="md:container px-5 py-8 flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <span className="inline-block bg-dark_primary text-white font-semibold px-3 py-1 rounded-md">YH</span>
            </div>
            <div>
              <h6 className="font-semibold dark:text-white">YUNUS HABEEB</h6>
              <p className="text-sm text-slate-500 dark:text-slate-400">Full‑Stack Developer — Frontend‑Focused</p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex gap-4 flex-wrap justify-center">
            <a href="#home" className="text-sm hover:underline">Home</a>
            <a href="/terms" className="text-sm hover:underline">Terms</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Yunus Habeeb</p>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/yunushabeeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 dark:text-slate-300">
                  <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.64 3.01 8.58 7.19 9.97.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.18-1.55-1.18-1.55-.97-.66.07-.65.07-.65 1.07.08 1.63 1.1 1.63 1.1.95 1.63 2.5 1.16 3.11.89.1-.7.37-1.16.68-1.43-2.33-.27-4.78-1.17-4.78-5.21 0-1.15.41-2.09 1.09-2.83-.11-.27-.48-1.36.1-2.83 0 0 .89-.29 2.93 1.08a10.2 10.2 0 012.67-.36c.91 0 1.83.12 2.67.36 2.03-1.37 2.92-1.08 2.92-1.08.59 1.47.22 2.56.11 2.83.68.74 1.09 1.68 1.09 2.83 0 4.05-2.46 4.94-4.8 5.2.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.94 0 .28.19.61.73.5 4.19-1.39 7.19-5.33 7.19-9.97C23.01 5.24 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/yunushabeeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 dark:text-slate-300">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM9 8h3.79v2.16h.05c.53-.99 1.83-2.16 3.77-2.16C21.71 8 24 10.11 24 14.35V24h-4v-8.13c0-1.94-.03-4.44-2.7-4.44-2.7 0-3.11 2.1-3.11 4.28V24H9V8z" />
                </svg>
              </a>

              {/* <a
                href="https://x.com/yunushabeeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 dark:text-slate-300">
                  <path d="M23.95 4.57a10 10 0 01-2.82.77A4.93 4.93 0 0023.33 3a9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.4 4.48A13.96 13.96 0 011.67 3.15a4.93 4.93 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.93 4.93 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.87 9.87 0 010 19.54a13.95 13.95 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0024 4.59z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 mt-6">
          <div className="md:container px-5 py-4 text-center text-xs ">
            <span className='text-slate-400 dark:text-white'>
              Icons provided by
              <a className="ml-1 underline" href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a>
            </span>
            <span className="block md:inline-block md:ml-4 text-slate-400 dark:text-white">Built with ❤️ and Tailwind CSS • All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
