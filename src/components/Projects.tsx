import Modal, { type Styles } from 'react-modal';
import { useState, useEffect, useRef, useMemo } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { content } from '../Content';

// Safely set react-modal app element (avoid SSR issues)
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root') || document.body;
  Modal.setAppElement(rootEl);
}

interface Project {
  title: string;
  desc: string;
  image: string;
  techs?: string[];
  category?: string;
  live?: string;
  code?: string;
}

const Projects = () => {
  const { Projects } = content;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState('all');
  const isSmall = useMediaQuery({ maxWidth: 767 });
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const defaultModalStyles: Styles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: isSmall ? 'auto' : 'min(900px, 70%)',
      maxWidth: '900px',
      maxHeight: isSmall ? '75vh' : '85vh',
      overflowY: 'auto',
      padding: '1rem',
      borderRadius: '0.75rem',
      background: '#fff',
      border: 'none',
      outline: 'none',
    },
    overlay: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      zIndex: 1000,
      backgroundColor: 'rgba(2, 6, 23, 0.55)',
      backdropFilter: 'blur(4px)',
    },
  };

  const [modalStyles, setModalStyles] = useState<Styles>(defaultModalStyles);

  useEffect(() => {
    function handleResize() {
      setModalStyles({
        ...defaultModalStyles,
        content: { ...defaultModalStyles.content, width: window.innerWidth < 768 ? '95%' : 'min(900px, 70%)' },
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // derive filtered contents from Projects.project_content and category
  const contents = useMemo(() => {
    if (!Projects?.project_content) return [];
    if (category === 'all') return Projects.project_content;
    return Projects.project_content.filter(
      (e) => String(e.category ?? '').toLowerCase() === String(category ?? '').toLowerCase()
    );
  }, [Projects, category]);

  function openModal(project: Project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // allow animation to finish before clearing
    setTimeout(() => setSelectedProject(null), 200);
  }

  useEffect(() => {
    if (modalIsOpen && closeBtnRef.current) closeBtnRef.current.focus();
  }, [modalIsOpen]);

  return (
    <section className="bg-light_primary" id="projects">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        className="project-modal-content app-modal"
        overlayClassName="project-modal-overlay app-modal-overlay"
        contentLabel={selectedProject?.title ?? 'Project details'}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        closeTimeoutMS={220}
      >
        <button
          ref={closeBtnRef}
          aria-label="Close project details"
          onClick={closeModal}
          className="absolute right-3 top-3 text-slate-500 hover:text-slate-900 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title ?? 'project image'}
              className="w-full h-64 object-cover rounded-md shadow-inner"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">{selectedProject?.title}</h3>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">{selectedProject?.desc}</p>

            <div className="mb-4">
              <h6 className="font-medium mb-2">Technologies</h6>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(selectedProject?.techs) &&
                  selectedProject.techs.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                      {t}
                    </span>
                  ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              {selectedProject?.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn bg-linear-to-r from-slate-700 to-slate-500 text-white"
                >
                  Live
                </a>
              )}
              {selectedProject?.code && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-default border-dark_primary"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <div className="md:container px-5 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h2 className="title" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
          </div>

          <div className="flex gap-2 flex-wrap items-center" data-aos="fade-down">
            {Projects.nav?.length
              ? [...Projects.nav.map((n) => n.toLowerCase())].map((navItem) => {
                  const label = navItem === 'all' ? 'All' : navItem.charAt(0).toUpperCase() + navItem.slice(1);
                  const isActive = category === navItem;
                  return (
                    <button
                      key={navItem}
                      onClick={() => setCategory(navItem)}
                      className={clsx(
                        'px-3 py-1 rounded-full text-sm border transition-colors',
                        isActive ? 'bg-dark_primary text-white border-dark_primary' : 'bg-white text-dark_primary border-slate-200'
                      )}
                      aria-pressed={isActive}
                    >
                      {label}
                    </button>
                  );
                })
              : null}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contents.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center p-10 bg-white rounded-2xl border border-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2-2 4 4M7 7h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="font-semibold text-lg mb-2">No projects found</h4>
              <p className="text-sm text-slate-500 mb-4 text-center max-w-md">
                No projects match “{category}”. Try viewing all projects or contact me to discuss a custom project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setCategory('all')}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-white text-dark_primary text-sm"
                >
                  Show all
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setCategory('all');
                    // small delay to allow routing if needed
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="px-4 py-2 rounded-full text-sm bg-linear-to-r from-slate-700 to-slate-500 text-white"
                >
                  Discuss a project
                </a>
              </div>
            </div>
          ) : (
            contents.map((gallery, i) => {
              const key = gallery.title ? `${gallery.title}-${i}` : `project-${i}`;
              const delay = Math.min(i * 160, 700);
              return (
                <article
                  key={key}
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(gallery)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(gallery)}
                  data-aos="fade-up"
                  data-aos-delay={delay}
                  className="project-card group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-100"
                >
                  <div className="relative h-48">
                    <img src={gallery.image} alt={gallery.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute left-3 bottom-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">{gallery.category}</span>
                  </div>

                  <div className="p-4">
                    <h5 className="font-semibold mb-1">{gallery.title}</h5>
                    <p className="text-xs text-slate-500 line-clamp-3 mb-3">{gallery.desc}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(gallery.techs) &&
                          gallery.techs.slice(0, 3).map((t) => (
                            <span key={t} className="text-[11px] bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                              {t}
                            </span>
                          ))}
                        {Array.isArray(gallery.techs) && gallery.techs.length > 3 && (
                          <span className="text-[11px] text-slate-400">+{gallery.techs.length - 3}</span>
                        )}
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0122 9.618V18a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
